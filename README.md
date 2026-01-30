# HealthBridge AI 🏥

**Winner of HackFusion 2026 - Innovation in Rural Healthcare**

HealthBridge AI is a hybrid "phygital" platform designed to bridge the healthcare gap in underserved communities. It combines an AI-powered telemedicine app with physical smart kiosks to ensure no village is left behind.

![HealthBridge Banner](public/banner.png)

## 🚀 Key Features

### 1. 🤖 AI Symptom Checker
- **Multilingual Support**: Takes input in regional languages (simulated via text/voice).
- **Intelligent Triage**: Classifies cases as Low (Home Care), Medium (Consult), or High (Urgent).
- **Instant Insights**: Provides preliminary diagnosis to doctors before the call starts.

### 2. 👨‍⚕️ Doctor Dashboard (AI-Driven)
- **Priority Queue**: Patients are sorted by AI-assigned severity (Critical cases first).
- **Smart Insights**: Shows summarized symptoms and vitals.
- **Telemedicine Integrated**: One-click video consultations.

### 3. 🏪 Community Smart Kiosk
- **IoT Simulation**: Interactive wizard for measuring Blood Pressure, Pulse, and Temperature.
- **Touch-First UI**: Designed for elderly and low-literacy users.
- **Offline Capable**: (Demo) Works with low connectivity.

### 4. 🔗 Blockchain Health Records
- **Portable**: Patient owns their data.
- **Secure**: Tamper-proof medical history (simulated for prototype).

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS (v4) + Custom Design System
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts

## 🏃‍♂️ How to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - **Landing Page**: [http://localhost:3000](http://localhost:3000)
   - **Patient Portal**: [http://localhost:3000/patient](http://localhost:3000/patient)
   - **Doctor Dashboard**: [http://localhost:3000/doctor](http://localhost:3000/doctor)
   - **Kiosk Interface**: [http://localhost:3000/kiosk](http://localhost:3000/kiosk)

## 📱 Demo Flow for Judges

1. **Start at Landing Page**: Show the problem stats and solution overview.
2. **Patient Persona**: 
   - Go to `Patient Portal` -> `Symptom Checker`.
   - Enter "Chest pain and sweating".
   - See AI flag it as "High Severity".
3. **Doctor Persona**:
   - Go to `Doctor Dashboard`.
   - Show how the "Chest pain" patient appears at the TOP of the queue.
4. **Kiosk Persona**:
   - Go to `Kiosk Mode`.
   - Run the `Check Vitals` wizard to show the IoT simulation.

## 👥 Team
- **Architect**: [Your Name]
- **Frontend**: HealthBridge AI Agent
- **ML/AI**: [Team Member]

---
*Built within 24 hours for HackFusion 2026*
