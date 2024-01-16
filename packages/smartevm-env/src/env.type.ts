


const validEnvs = ['prod', 'test', 'local'] as const;

export type MbEnv = typeof validEnvs[number];

export function validateMbEnv(env: string | undefined): MbEnv {
    if (!env || !validEnvs.includes(env as MbEnv)) {
        throw new Error(`Invalid app environment: ${env}`);
    }

    return env as MbEnv;
}
