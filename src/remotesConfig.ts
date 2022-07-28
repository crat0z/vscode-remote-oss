export enum HostKind {
    Manual = "manual",
}

export interface ExtendedHostFolder {
    name: string;
    path: string;
}

export type HostFolder = string | ExtendedHostFolder;
export interface HostConfigBase {
    type: string;
    name: string;
    folders?: [HostFolder];
}

export interface ManualHostConfig extends HostConfigBase {
    type: HostKind.Manual;
    host: string;
    port: number;
    no_token?: boolean;
    connection_token?: string;
}

export type HostConfig = ManualHostConfig;
