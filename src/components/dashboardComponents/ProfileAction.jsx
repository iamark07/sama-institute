import React from "react";

function ProfileAction({ profile }) {
  if (!profile) {
    return null; // if no profile data is passed, render nothing
  }

  return (
    <div className="flex items-center gap-4 w-full md:w-fit justify-end">
      <div className="flex items-center gap-3 md:border-l border-gray-200 pl-4">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="">
          <div className="font-semibold text-gray-800 text-sm">
            {profile.name}
          </div>
          <div className="text-xs text-gray-500">{profile.email}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAction;
