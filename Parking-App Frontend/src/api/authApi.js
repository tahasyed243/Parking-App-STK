// For GitHub Pages deployment
const isGitHubPages = window.location.hostname.includes('github.io');

// Mock API functions for GitHub Pages
const mockLogin = async (data) => {
    console.log("Demo login with:", data.email);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return {
        token: "demo-jwt-token-" + Date.now(),
        user: {
            id: "1",
            name: data.email.split('@')[0] || "Demo User",
            email: data.email,
            role: "user"
        },
        message: "✅ Login successful (Demo Mode)"
    };
};

const mockSignup = async (data) => {
    console.log("Demo signup with:", data);

    await new Promise(resolve => setTimeout(resolve, 800));

    return {
        token: "demo-jwt-token-" + Date.now(),
        user: {
            id: "2",
            name: data.name,
            email: data.email,
            role: "user"
        },
        message: "✅ Signup successful (Demo Mode)"
    };
};

// Real API functions for local development
const realLogin = async (data) => {
    try {
        const BASE_URL = "http://localhost:5000/api/auth";
        const res = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await res.json();
    } catch (error) {
        console.log("⚠️ Backend not available, using demo login");
        return mockLogin(data);
    }
};

const realSignup = async (data) => {
    try {
        const BASE_URL = "http://localhost:5000/api/auth";
        const res = await fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await res.json();
    } catch (error) {
        console.log("⚠️ Backend not available, using demo signup");
        return mockSignup(data);
    }
};

// Export - use mock for GitHub Pages, real for local
export const loginUser = isGitHubPages ? mockLogin : realLogin;
export const signupUser = isGitHubPages ? mockSignup : realSignup;