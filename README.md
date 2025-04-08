# Time Tracker Web Application

A React-based web application for Time Tracker that provides employee email verification and serves as the public-facing component of the Time Tracker system.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Development](#development)
  - [Available Scripts](#available-scripts)
  - [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Integration with the Time Tracker System](#integration-with-the-time-tracker-system)

## Overview

The Time Tracker Web Application serves as the public-facing component of the Time Tracker system. Its primary purpose is to:

1. Provide a landing page with information about the Time Tracker service
2. Handle email verification for employees
3. Direct verified users to download the desktop application
4. Present a clean, professional user interface that aligns with the Time Tracker brand

## Features

- **Landing Page**: Clear presentation of Time Tracker's key features
- **Email Verification**: Process for verifying employee accounts
- **Responsive Design**: Fully functional across desktop and mobile devices
- **Desktop App Download**: Platform-specific download links for the Time Tracker desktop application
- **Error Handling**: Comprehensive error states for all user interactions

## Tech Stack

- **React**: Front-end JavaScript library for building user interfaces
- **React Router**: Navigation and routing between pages
- **Axios**: HTTP client for API requests
- **CSS**: Custom styling with CSS variables for consistent theming
- **Web Vitals**: Performance monitoring

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn package manager
- A running instance of the Time Tracker backend API

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/time-tracker.git
cd time-tracker/web-app
```

2. Install dependencies:

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory with the following variables:

