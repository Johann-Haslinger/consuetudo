import { useEffect, useState } from "react";
import supabaseClient from "../lib/supabase";
import { Streak, SupabaseTable } from "../types";
import { useSession } from "./useSession";

export const useStreaks = () => {
  const [streaks, setStreaks] = useState<Streak[]>([]);
  const { userId } = useSession();

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

  const addStreak = async (streak: Streak) => {
    console.log("Adding streak", streak, userId);
    const { error } = await supabaseClient.from(SupabaseTable.Streaks).insert([{ ...streak, user_id: userId }]);

    if (error) {
      console.error("Error adding streak", error);
      return;
    }

    setStreaks([...streaks, streak]);
  };

  return { streaks, addStreak };
};
