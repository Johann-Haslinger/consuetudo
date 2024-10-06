import { useEffect, useState } from "react";
import supabaseClient from "../lib/supabase";

export const useSession = () => {
  const [session, setSession] = useState<unknown>();
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabaseClient.auth.getSession();

      setUserId(data.session?.user?.id || null);
      setSession(data.session || false);
      setIsLoggedIn(!!data.session || false);
    };

    supabaseClient?.auth.onAuthStateChange((_event, session) => {
      setSession(session || false);
      setIsLoggedIn(!!session || false);
      setUserId(session?.user?.id || null);
    });

    fetchSession();
  }, []);

  return {
    session,
    isLoggedIn,
    userId,
  };
};
