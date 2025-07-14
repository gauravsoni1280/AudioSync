import React from 'react';
import { fetchUserProfile } from "@/services/sharedServices"

const Async = () => {
  console.log(fetchUserProfile);
  return (
    <div>
      Hi
    </div>
  )
}

export default Async
