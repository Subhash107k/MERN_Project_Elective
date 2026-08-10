# 🤝 Contributing Guidelines

Thank you for contributing to the **15-Day / 45-Hour MERN Course Edition** project!

---

## Code of Conduct
Please maintain a respectful, beginner-friendly, and educational environment for all learners and contributors.

---

## How to Contribute
1. **Fork the repository** on GitHub.
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`.
3. **Commit your changes:** `git commit -m 'Add amazing feature'`.
4. **Ensure automated tests pass:**
   ```bash
   cd backend && npm test
   cd ../frontend && npm test
   ```
5. **Push to your branch:** `git push origin feature/amazing-feature`.
6. **Open a Pull Request** describing your changes.

---

## Coding Standards
* Use **ES Module syntax** (`import`/`export`) across backend and frontend code.
* Use **camelCase** for variable, function, and schema field names.
* Keep functions small, descriptive, and well-commented for beginners.
* Ensure all new endpoints include validation and centralized error handling.
