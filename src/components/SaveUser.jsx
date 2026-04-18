import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const SaveUser = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      fetch("https://hotel-booking-server-ivory.vercel.app/api/clerk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
        }),
      })
      .then(res => res.json())
      .then(data => console.log("Saved:", data))
      .catch(err => console.log(err));
    }
  }, [user]);

  return null;
};

export default SaveUser;