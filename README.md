### kadet-wallet-web-extension
KADET is a multi-chain crypto wallet web extension that allows users to hold and transact tokens and NFTs. incubated by Tech Fleet, a US-based DAO.


![prototype ](https://github.com/techfleetworks/kadet-wallet-web-extension-NEW/assets/84674817/45e20bf2-043b-40ce-a71c-0e0d29940c4e)

### Built with

- TypeScript - programming language 
- Semantic HTML5 markup
- menifest 3 - to run browser extensions
- Vite - web-boundler
- [React](https://reactjs.org/) - JS library
- [TailWind](https://tailwindcss.com/) - For styles
  

### ruunning the code locally : 

1. npm i.
2. npm run dev.
3. (dist) : after that you can load the dist file to your chrome or any chromium explorer.

- if there is any problem, most ptobabely will be even from Node.js version "should be 16 and above" or "cardano-crypto.js":

1. Node.js : just go to formal website and install the last update.
2. cardano-crypto.js :
  - install python  last version, for windows "exclusively from  Windows Store,"  , for Mac " directly from website, "i dont think there will be problem "
  - install  emsdk
    git clone https://github.com/emscripten-core/emsdk.git
    cd emsdk
    ./emsdk install 1.39.19
    ./emsdk activate 1.39.19 
    source ./emsdk_env.sh


