import { create } from "zustand";

interface Wallet {
  chainId: string | number;
  balance: number;
  account: string;
  alias: string;
  publicKey: string;
  secretKey: string;
  wallets: RawWallet[];
  connectedSites: string[];
}

interface RawNetwork {
  name: string;
  url: string;
  explorer: string;
  networkId: string;
  isDefault: boolean;
  id: string;
}

interface RawExtension {
  passwordHash: string;
  isFetching: boolean;
  isLoading: boolean;
  contacts: any[];
  recent: any[];
  selectedNetwork: RawNetwork;
  networks: RawNetwork[];
  isHaveSeedPhrase: boolean;
  isCreateSeedPhrase: boolean;
  activeTab: string;
}

interface RootState {
  wallet: Wallet;
  extensions: RawExtension;
  auth: any; // Replace with the actual auth state type
}

const selectedNetwork: RawNetwork = {
  name: "Mainnet",
  url: "https://chainweb.kaddex.com",
  explorer: "https://explorer.chainweb.com/mainnet",
  networkId: "mainnet01",
  isDefault: true,
  id: "0",
};

const defaultNetworks: RawNetwork[] = [
  {
    name: "Mainnet",
    url: "https://chainweb.kaddex.com",
    explorer: "https://explorer.chainweb.com/mainnet",
    networkId: "mainnet01",
    isDefault: true,
    id: "0",
  },
  {
    name: "Testnet",
    url: "https://api.testnet.chainweb.com",
    explorer: "https://explorer.chainweb.com/testnet",
    networkId: "testnet04",
    isDefault: true,
    id: "1",
  },
  {
    name: "Ecko Devnet",
    url: "https://devnet.ecko.finance",
    explorer: "https://explorer.chainweb.com/testnet",
    networkId: "development",
    isDefault: true,
    id: "101",
  },
];

const useStore = create<RootState>((set) => ({
  wallet: {
    chainId: "0",
    balance: 0,
    account: "",
    alias: "",
    publicKey: "",
    secretKey: "",
    wallets: [],
    connectedSites: [],
  },
  extensions: {
    passwordHash: "",
    isFetching: true,
    isLoading: false,
    contacts: [],
    recent: [],
    selectedNetwork: selectedNetwork,
    networks: defaultNetworks,
    isHaveSeedPhrase: false,
    isCreateSeedPhrase: false,
    activeTab: ACTIVE_TAB.HOME,
  },
  auth: {}, // Replace with the actual initial auth state
}));

export default useStore;
