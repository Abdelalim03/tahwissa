import React, { createContext, useState, useEffect, useContext } from "react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [authTokens, setAuthTokens] = useState(null);

  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    if (response.ok) {
      let data = await response.json();
      if (data) {
        if (typeof window !== "undefined") {
          localStorage.setItem("authTokens", JSON.stringify(data));
        }
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        router.push("/");
        return { success: true };
      } else {
        const error = "Something went wrong while logging in.";
        return { success: false, error };
      }
    } else {
      const data = await response.json();
      const err = data.detail;
      return { success: false, error: err };
    }
  };

  const logoutUser = () => {
    fetch("http://127.0.0.1:8000/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens.refresh })
    })
      .then((res) => {
        if (res.ok) {
          if (typeof window !== "undefined") {
            localStorage.removeItem("authTokens");
          }
          setAuthTokens(null);
          setUser(null);
          router.push("/");
        }
      })
      .catch((err) => {console.log(err);});
  };

  const updateToken = async () => {
    const response = await fetch("http://127.0.0.1:8000/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      if (typeof window !== "undefined") {
        localStorage.setItem("authTokens", JSON.stringify(data));
      }
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const authTokens = localStorage.getItem("authTokens");
      const currentTime = Date.now() / 1000;
      if (authTokens) {
        const u = jwtDecode(authTokens);
        if (u.exp < currentTime) {
          alert("Your session has expired, please loggin again");
          setAuthTokens(null);
          setUser(null);
          if (typeof window !== "undefined") {
            localStorage.removeItem("authTokens");
          }
        } else {
          setAuthTokens(JSON.parse(authTokens));
          setUser(jwtDecode(authTokens));
        }
      } else {
        setAuthTokens(null);
        setUser(null);
      }
    }
  }, []);

  useEffect(() => {
    const REFRESH_INTERVAL = 1000 * 3600; // 1 hour
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [authTokens]);

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
