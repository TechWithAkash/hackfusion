// ============================================
// HEALTHBRIDGE AI - TYPE DEFINITIONS
// ============================================

// === USER TYPES ===
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'patient' | 'doctor' | 'admin';
  avatar?: string;
  createdAt: Date;
}

export interface Patient extends User {
  role: 'patient';
  age: number;
  gender: 'male' | 'female' | 'other';
  bloodGroup?: string;
  address: string;
  village?: string;
  emergencyContact?: string;
  medicalHistory?: MedicalHistory[];
}

export interface Doctor extends User {
  role: 'doctor';
  specialty: string;
  qualification: string;
  experience: number;
  languages: string[];
  rating: number;
  consultationFee: number;
  availability: 'online' | 'offline' | 'busy';
}

// === MEDICAL TYPES ===
export interface MedicalHistory {
  id: string;
  condition: string;
  diagnosedDate: Date;
  status: 'active' | 'resolved';
  notes?: string;
}

export interface Vitals {
  id: string;
  patientId: string;
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  heartRate: number;
  temperature: number;
  oxygenLevel?: number;
  glucoseLevel?: number;
  recordedAt: Date;
  recordedBy?: string;
}

export interface Symptom {
  id: string;
  name: string;
  severity: 'low' | 'medium' | 'high';
  duration: string;
  description?: string;
}

export interface AIAnalysis {
  id: string;
  patientId: string;
  symptoms: string[];
  possibleConditions: {
    name: string;
    confidence: number;
    description: string;
  }[];
  severity: 'low' | 'medium' | 'high' | 'critical';
  recommendations: string[];
  requiresConsultation: boolean;
  analyzedAt: Date;
}

export interface Consultation {
  id: string;
  patientId: string;
  doctorId: string;
  scheduledAt: Date;
  duration: number; // in minutes
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
  symptoms?: string;
  diagnosis?: string;
  prescriptionId?: string;
  notes?: string;
  aiAnalysisId?: string;
  vitalsId?: string;
}

export interface Prescription {
  id: string;
  consultationId: string;
  patientId: string;
  doctorId: string;
  medicines: Medicine[];
  instructions: string;
  issuedAt: Date;
  validUntil?: Date;
  blockchainHash?: string;
}

export interface Medicine {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

// === HEALTH RECORD TYPES ===
export interface HealthRecord {
  id: string;
  patientId: string;
  type: 'consultation' | 'prescription' | 'lab-report' | 'vitals';
  title: string;
  date: Date;
  data: any;
  blockchainHash?: string;
  isVerified: boolean;
}

// === KIOSK TYPES ===
export interface Kiosk {
  id: string;
  name: string;
  location: string;
  village: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  status: 'active' | 'inactive' | 'maintenance';
  devices: {
    bpMonitor: boolean;
    pulseOximeter: boolean;
    thermometer: boolean;
    glucometer: boolean;
  };
  managedBy?: string;
  lastMaintenance?: Date;
}

// === NOTIFICATION TYPES ===
export interface Notification {
  id: string;
  userId: string;
  type: 'appointment' | 'prescription' | 'reminder' | 'alert';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  actionUrl?: string;
}

// === ANALYTICS TYPES ===
export interface DoctorStats {
  totalConsultations: number;
  patientsServed: number;
  averageRating: number;
  earningsThisMonth: number;
  consultationsToday: number;
}

export interface PatientStats {
  totalConsultations: number;
  lastCheckup?: Date;
  upcomingAppointments: number;
  healthScore?: number;
}

// === API RESPONSE TYPES ===
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
