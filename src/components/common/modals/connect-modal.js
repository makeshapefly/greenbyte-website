import React from "react";

const ConnectModal = () => {

  return (
    <div className="connect__modal">
      <div
        className="modal fade"
        id="connectModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal__wrapper">
              <div className="modal__header">
                <h2 className="title">Connect Wallet</h2>
                <button data-bs-dismiss="modal" aria-label="Close">
                  <i className="flaticon-close-1"></i>
                </button>
              </div>
              <div className="modal__body text-center">
                <p>
                  Please select a wallet to connect for start Minting your NFTs
                </p>
                <div className="connect__section">
                  <ul className="list-wrap">
                    <li>
                      <a href="#" className="connect-meta">
                        <img
                          src="/assets/img/icons/metamask.svg"
                          alt="Metamask"
                        />
                        MetaMask
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/assets/img/icons/bitgo.svg" alt="BitGo" />
                        BitGo
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/assets/img/icons/trust.svg" alt="Trust" />
                        Trust Wallet
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/assets/img/icons/coinbase.svg"
                          alt="Coinbase"
                        />
                        Coinbase
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="privacy-text">
                  By connecting your wallet, you agree to our{" "}
                  <a href="#">Terms of Service</a> and our{" "}
                  <a href="#">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectModal
