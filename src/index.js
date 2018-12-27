import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class RequestViewWp extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { 
            umutiView,
            wrapperClass,
            viewTitle,
            requestTitle,
            requestSubTitle,
            requestViewTable,
            pharmacyTitleColor,
            sendBtn
        } = this.props;
        return(
            <div className={`row reset-row create-wrapper orderWrapper ${umutiView}`}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                    <div className={`create-content shadow-box ${wrapperClass}`}>
                        <div className="create-header">
                            <span className="umuti-create-title">{viewTitle}</span>
                            <span>
                                {sendBtn}
                            </span>
                        </div>
                        <div className="row reset-row create-form form-container">
                            <div className="pharmacy-title" style={{color: pharmacyTitleColor}}>{requestTitle}</div>
                            <div className="pharmacy-subtitle">{requestSubTitle}</div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                                {requestViewTable}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset bottom-total-wrapper">
                                <div className="row reset-row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset bottom-subtotal">
                                        <div className="row col-lg-4 col-md-4 col-sm-6 col-xs-12 offset-lg-8 col-md-8 col-sm-6">
                                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 title">SUBTOTAL</div>
                                            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 price">RWF 23400</div>
                                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 title">VAT</div>
                                            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 vat"><span>RWF 23400</span></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset bottom-total">
                                        <div className="row col-lg-4 col-md-4 col-sm-6 col-xs-12 offset-lg-8 col-md-8 col-sm-6">
                                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 title">TOTAL</div>
                                            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 price">RWF 23400</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default RequestViewWp;







  