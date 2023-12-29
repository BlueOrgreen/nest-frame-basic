// import { toNumber } from "lodash";
// import { UserConfig } from "./types";
import bcrypt from 'bcrypt';
// import { isNil } from 'lodash';


// export const defaultUserConfig = (configure: any): UserConfig => {
//     return {
//         hash: 10,
//         jwt: {
//             secret: configure.env.get('USER_TOKEN_SECRET', 'my-refresh-secret'),
//             token_expired: configure.env.get('USER_TOKEN_EXPIRED', (v) => toNumber(v), 3600),
//             refresh_secret: configure.env.get('USER_REFRESH_TOKEN_SECRET', 'my-refresh-secret'),
//             refresh_token_expired: configure.env.get(
//                 'USER_REFRESH_TOKEN_EXPIRED',
//                 (v) => toNumber(v),
//                 3600 * 30,
//             ),
//         },
//     };
// };

export const encrypt = async (password: string) => {
    const hash = 10;
    return bcrypt.hashSync(password, hash)
    // try {
    //     // @ts-ignore
    //     // eslint-disable-next-line @typescript-eslint/return-await
    //     return await Bun.password.hash(password, {
    //         algorithm: 'bcrypt',
    //         cost: hash,
    //     });
    // } catch (error) {
    //     return bcrypt.hashSync(password, hash);
    // }
};

export const decrypt = (password: string, hashed: string) => {
    return bcrypt.compareSync(password, hashed);
    // try {
    //     // @ts-ignore
    //     // eslint-disable-next-line @typescript-eslint/return-await
    //     return Bun.password.verifySync(password, hashed);
    // } catch (error) {
    //     return bcrypt.compareSync(password, hashed);
    // }
};

export async function getUserConfig() {
    const userConfig = {
        hash: 10,
        jwt: {
            secret: 'admin!@#123',
            token_expired: 86400,
            refresh_secret: 'admin!@#123',
            refresh_token_expired: 2592000,
        },
    };
    return userConfig;
}