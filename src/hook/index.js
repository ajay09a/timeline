export const useProviderAuth = ()=>{
    const [user, setUser] = uUeState(null);
    const [loading, setLoading] = uUeState(true);

    const login = (email, password)=>{};

    const logout = ()=>{};

    return {
        user,
        login,
        logout,
        loading,
    }
}