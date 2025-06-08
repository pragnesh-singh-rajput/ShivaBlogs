// Newsletter API configuration and utilities
export const RESEND_CONFIG = {
  API_URL: 'https://api.resend.com',
  AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
  // Note: In production, this should be stored as an environment variable
  // For now, we'll handle this in the API routes
};

export interface SubscribeRequest {
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface UnsubscribeRequest {
  email: string;
}

export interface ResendContact {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  created_at: string;
  unsubscribed: boolean;
}

export interface ResendError {
  message: string;
  name: string;
}

// Utility function to extract name from email
export const extractNameFromEmail = (email: string): { firstName: string; lastName: string } => {
  const localPart = email.split('@')[0];
  const nameParts = localPart.split(/[._-]/);
  
  if (nameParts.length >= 2) {
    return {
      firstName: nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1),
      lastName: nameParts[1].charAt(0).toUpperCase() + nameParts[1].slice(1)
    };
  }
  
  return {
    firstName: nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1),
    lastName: ''
  };
};

// API client for Resend
export class ResendClient {
  private apiKey: string;
  private baseUrl: string;
  private audienceId: string;

  constructor(apiKey: string, audienceId: string = RESEND_CONFIG.AUDIENCE_ID) {
    this.apiKey = apiKey;
    this.baseUrl = RESEND_CONFIG.API_URL;
    this.audienceId = audienceId;
  }

  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    return data;
  }

  async addContact(email: string, firstName?: string, lastName?: string): Promise<ResendContact> {
    const endpoint = `/audiences/${this.audienceId}/contacts`;
    
    const payload = {
      email,
      first_name: firstName,
      last_name: lastName,
      unsubscribed: false,
    };

    return this.makeRequest(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async updateContact(email: string, updates: Partial<ResendContact>): Promise<ResendContact> {
    const endpoint = `/audiences/${this.audienceId}/contacts/${encodeURIComponent(email)}`;
    
    return this.makeRequest(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  }

  async unsubscribeContact(email: string): Promise<ResendContact> {
    return this.updateContact(email, { unsubscribed: true });
  }

  async getContact(email: string): Promise<ResendContact> {
    const endpoint = `/audiences/${this.audienceId}/contacts/${encodeURIComponent(email)}`;
    
    return this.makeRequest(endpoint, {
      method: 'GET',
    });
  }
}