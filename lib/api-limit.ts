import {auth} from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { MAX_FREE_COUNTS } from "@/constants"

export const increaseApiLimit = async () => {
    const {userId} = auth();

    // check if user login or not
    if (!userId) {
        return;
    }

    // get user api limit db from prisma
    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId
        }
    })

    // update user usage count if userId is existing
    // create new user with starting count if userId is not existing
    if (userApiLimit) {
        await prismadb.userApiLimit.update({
            where: {userId},
            data: {count: userApiLimit.count + 1}
        });
    } else {
        await prismadb.userApiLimit.create({
            data: {userId, count: 1}
        })
    }

}

export const checkApiLimit = async () => {
    const {userId} = auth();

    // check if user login or not
    if (!userId) {
        return;
    }

    // get user api limit db from prisma
    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId
        }
    })

    // if doesn't have user or user usage already reached limit, return false
    if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
        return true;
    } else {
        return false;
    }

}

export const getApiLimitCount = async () => {
    const {userId} = auth();

    // check if user login or not
    if (!userId) {
        return 0;
    }

    // get user api limit db from prisma
    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId
        }
    })

    // return zero if doesn't have user
    if (!userApiLimit ) {
        return 0
    }
    
    return userApiLimit.count;
}



