# 🔒 Security Audit & Controls Report

---

## 1. Security Overview
The application has been audited for common web application security risks outlined in the OWASP Top 10 guidelines.

## 2. Identified Risks & Implemented Defenses

| Threat Category | Risk Level | Remediated Fix |
| :--- | :---: | :--- |
| **Plaintext Password Exposure** | 🔴 Critical | Implemented `bcryptjs` pre-save salt & hash algorithm (10 salt rounds). Passwords marked `select: false` in schema queries. |
| **Missing API Authentication** | 🔴 Critical | Implemented JSON Web Token (JWT) verification middleware (`protect`) checking `Authorization: Bearer` headers. |
| **Hardcoded Secrets** | 🟠 High | Moved database connection string (`MONGO_URI`) and signing secret (`JWT_SECRET`) into `.env` file. Added `.env` to `.gitignore`. |
| **NoSQL Injection Vulnerability** | 🟠 High | Enforced strict Mongoose schemas with type casting and input validation middleware (`validateBody`). |
| **Unrestricted CORS Access** | 🟡 Medium | Configured CORS options middleware allowing whitelisted origin headers (`CLIENT_URL`). |

---

## 3. Educational vs Production Security Note

> [!NOTE]
> This repository is engineered as an educational learning edition. For production enterprise deployment, the following additional hardening steps are recommended:
> 1. Configure HTTPS TLS/SSL certificates.
> 2. Enable rate-limiting middleware (`express-rate-limit`) to prevent brute-force login attempts.
> 3. Implement HTTP security header middleware (`helmet`).
> 4. Use HttpOnly secure cookies for storing JWT tokens rather than `localStorage`.
