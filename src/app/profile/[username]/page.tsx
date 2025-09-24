import {
    getProfileByUsername,
    getUserLikedPosts,
    getUserPosts,
    isFollowing,
} from "@/actions/profile.action";
import ProfilePageClient from "@/app/profile/[username]/ProfilePageClient";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
    params,
}: {
    params: { username: string };
}) {
    const user = await getProfileByUsername(params.username);
    if (!user) return;

    return {
        title: `${user.name ?? user.username}`,
        description: user.bio || `check out ${user.username}'s profile.`,
    };
}

const ProfilePageServer = async ({
    params,
}: {
    params: { username: string };
}) => {
    const user = await getProfileByUsername(params.username);
    if (!user) return notFound();

    const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
        getUserPosts(user.id),
        getUserLikedPosts(user.id),
        isFollowing(user.id),
    ]);
    return (
        <ProfilePageClient
            user={user}
            posts={posts}
            likedPosts={likedPosts}
            isFollowing={isCurrentUserFollowing}
        />
    );
};

export default ProfilePageServer;
