
/**
 * MIT License
 * 
 * Copyright (c) 2020 Ronuse Agency, Adewale Azeez, Oyeleke Damilola.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component } from 'react';
import { ObjUtils, BoolUtils } from "../../utils";
import { Scheme, Alignment } from "../variables/";

class ButtonComponent extends Component {

    static defaultProps = {
        text: null,
        alignText: Alignment.CENTER,
        icon: null,
        alignIcon: Alignment.LEFT,
        rightIcon: null,
        tooltip: null,
        tooltipProps: null,
        scheme: null,
        link: null,
        raised: null,
        rounded: null,
        borderless: null,
        textonly: null,
        outlined: null,
        fill: false,
        nostyle: false,
        fillIcon: null,
        forwardRef: null,
        fillOnHover: false
    }

    static propTypes = {
        text: PropTypes.string,
        alignText: PropTypes.string,
        icon: PropTypes.any,
        alignIcon: PropTypes.string,
        rightIcon: PropTypes.any,
        tooltip: PropTypes.string,
        tooltipProps: PropTypes.object,
        scheme: PropTypes.string,
        link: PropTypes.bool,
        raised: PropTypes.bool,
        rounded: PropTypes.bool,
        borderless: PropTypes.bool,
        textonly: PropTypes.bool,
        outlined: PropTypes.bool,
        fill: PropTypes.bool,
        nostyle: PropTypes.bool,
        fillIcon: PropTypes.bool,
        forwardRef: PropTypes.any,
        fillOnHover: PropTypes.bool
    }

    constructor(props) {
        super(props);

        this.elementRef = React.createRef(this.props.forwardRef);
    }

    resolveForwardRef() {
        let ref = this.props.forwardRef;
        if (ref) {
            if (typeof ref === 'function') {
                ref(this.elementRef.current);
            } else {
                ref.current = this.elementRef.current;
            }
        }
    }

    componentDidMount() {
        this.resolveForwardRef();
    }

    componentDidUpdate(prevProps) {

    }

    componentWillUnmount() {

    }

    renderIcon() {
        if (!this.props.icon || this.props.scheme == Scheme.SKELETON) {
            return null;
        }

        let isString = BoolUtils.isTypeOfAny(this.props.icon, ["string"]);
        if (!isString && !React.isValidElement(this.props.icon)) {
            throw new Error("Only string or a valid react element is expected as the checkbox label");
        }
        let className = classNames('r-r-button-icon', isString ? this.props.icon : this.props.icon.props.className, {
            'r-r-float-center': this.props.alignIcon === Alignment.CENTER,
            'r-r-margin-right-15px': this.props.rightIcon && (BoolUtils.equalsAny(this.props.alignIcon, [ Alignment.RIGHT, Alignment.TOP_RIGHT, Alignment.BOTTOM_RIGHT]) || 
                                    BoolUtils.equalsAny(this.props.alignText, [ Alignment.RIGHT, Alignment.TOP_RIGHT, Alignment.BOTTOM_RIGHT])),
            'r-r-float-left': this.props.alignIcon === Alignment.LEFT,
            'r-r-float-right': this.props.alignIcon === Alignment.RIGHT,
            'r-r-width-100-percent': this.props.fillIcon
        });
        if (!isString) {
            var relayProps = ObjUtils.clone(this.props.icon.props);
            className = classNames(className, relayProps.className);
            relayProps.className = className;
            return React.cloneElement(this.props.icon, relayProps);
        }
        return <i className={className}></i>;
    }

    renderRightIcon() {
        if (!this.props.rightIcon || this.props.scheme == Scheme.SKELETON) {
            return null;
        }

        let isString = BoolUtils.isTypeOfAny(this.props.rightIcon, ["string"]);
        if (!isString && !React.isValidElement(this.props.rightIcon)) {
            return null;
        }
        let className = classNames('r-r-button-icon', isString ? this.props.rightIcon : this.props.rightIcon.props.className, {
            'r-r-float-right': this.props.fill
        });
        if (!isString) {
            var relayProps = ObjUtils.clone(this.props.rightIcon.props);
            relayProps.className = className;
            return React.cloneElement(this.props.rightIcon, relayProps);
        }
        return <i className={className}></i>;
    }

    renderText() {
        if (!this.props.text || this.props.scheme == Scheme.SKELETON) {
            return null;
        }

        let className = classNames({
            'r-r-float-center': this.props.alignText === Alignment.CENTER,
            'r-r-margin-left-15px': this.props.icon && BoolUtils.equalsAny(this.props.alignIcon, [ Alignment.LEFT, Alignment.CENTER, Alignment.TOP_LEFT, Alignment.BOTTOM_LEFT ]),
            'r-r-margin-right-15px': (this.props.icon && BoolUtils.equalsAny(this.props.alignIcon, [ Alignment.RIGHT, Alignment.TOP_RIGHT, Alignment.BOTTOM_RIGHT]) || this.props.rightIcon),
            'r-r-float-left': this.props.alignText === Alignment.LEFT,
            'r-r-float-right': this.props.alignText === Alignment.RIGHT
        })
        return <span className={className}>{this.props.text}</span>;
    }

    render() {
        let className = classNames(
            (this.props.scheme && !this.props.textonly && !this.props.outlined && !this.props.link) ? `${this.props.scheme}` : null, 
            (this.props.scheme && this.props.outlined) ? `${this.props.scheme}-border-1px` : null,
            (this.props.scheme && this.props.outlined && this.props.fillOnHover) ? `${this.props.scheme}-bg-hover` : null,
            (this.props.scheme && this.props.outlined && !this.props.textonly) ? `${this.props.scheme}-border-1px-bg-hover` : null,
            (this.props.scheme && (this.props.outlined || this.props.textonly || this.props.link)) ? `${this.props.scheme}-text` : null,
            (this.props.scheme && (!this.props.nostyle && this.props.scheme)) ? `${this.props.scheme}-border-3px-focus-box-shadow` : null, {
            'r-r-button': !this.props.nostyle,
            'r-r-button-vertical': BoolUtils.equalsAny(this.props.alignIcon, [Alignment.TOP, Alignment.BOTTOM]) && this.text,
            'r-r-disabled': !this.props.nostyle && this.props.disabled,
            'r-r-padding-left-right-20px': this.props.text,
            'r-r-width-100-percent r-r-display-block': this.props.fill,
            'r-r-button-rounded-border': !this.props.nostyle && this.props.rounded,
            'r-r-button-raised-border': !this.props.nostyle && this.props.raised,
            'r-r-button-textonly': !this.props.nostyle && (this.props.textonly || this.props.outlined),
            'r-r-no-background': !this.props.nostyle && (this.props.outlined || this.props.link),
            'r-r-no-box-shadow-active r-r-text-decoration-underline-hover': !this.props.nostyle && this.props.link,
            'r-r-no-border': !this.props.nostyle && (this.props.borderless || (this.props.textonly && !this.props.outlined) || this.props.link),
            
            'r-r-button-min-size r-r-loading r-r-skeleton': this.props.scheme === Scheme.SKELETON /*&& !(this.props.icon || this.props.rightIcon)*/,
            'r-r-button-min-size-icon-only r-r-loading r-r-skeleton': this.props.scheme === Scheme.SKELETON && (this.props.icon || this.props.rightIcon) && !this.props.text,

            'r-r-stateless': BoolUtils.equalsAny(this.props.scheme, [Scheme.STATELESS, Scheme.SKELETON]) && !this.props.link,
            'r-r-padding-0px': this.props.fillIcon
        }, 'r-r-button-theme', this.props.className);
        let icon = this.renderIcon();
        let rightIcon = this.renderRightIcon();
        let text = this.renderText();
        let iconPreText = BoolUtils.equalsAny(this.props.alignIcon, [ Alignment.CENTER, Alignment.LEFT, Alignment.TOP_LEFT, Alignment.BOTTOM_LEFT ]) ;
        let rightIconPreText = this.props.rightIcon && this.props.fill && this.props.rightIcon.indexOf('float-none') === -1 ;
        let componentProps = ObjUtils.findDiffKeys(this.props, ButtonComponent.defaultProps);
        if (!componentProps.children) {
            componentProps.children = [];
        }
        componentProps.children.push(iconPreText ? icon : '');
        componentProps.children.push(rightIconPreText ? rightIcon : '');
        componentProps.children.push(text);
        componentProps.children.push(iconPreText ? '' : icon);
        componentProps.children.push(rightIconPreText ? '' : rightIcon);

        let element = this.props.link ? <a ref={this.elementRef} {...componentProps} className={className}/>
                      : <button ref={this.elementRef} {...componentProps} className={className}/>

        return element;
    }

}

export const Button = React.forwardRef((props, ref) => <ButtonComponent {...props} forwardRef={ref} />);