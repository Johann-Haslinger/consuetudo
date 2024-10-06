import { useState, useEffect } from "react";
import supabaseClient from "../lib/supabase";
import { Streak, SupabaseTable } from "../types";

export const useStreaks = () => {
  const [streaks, setStreaks] = useState<Streak[]>([]);

  useEffect(() => {
    const fetchStreaks = async () => {
      const { data: streaks, error } = await supabaseClient
        .from(SupabaseTable.Streaks)
        .select("id, title, startDate, description");

      if (error) {
        console.error("Error fetching streaks", error);
        return;
      }

      setStreaks(streaks);
    };

    fetchStreaks();
  }, []);

  return streaks;
};
