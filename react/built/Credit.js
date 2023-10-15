"use client";
import React, { useCallback, useState } from "react";
export function Credit({ name, author, url, license, info, licenseUrl, }) {
    const [isLicenseShown, setIsLicenseShown] = useState(false);
    const [isInfoShown, setIsInfoShown] = useState(false);
    const onClickShowLicense = useCallback(function onClickShowLicense(event) {
        event.preventDefault();
        setIsLicenseShown(!isLicenseShown);
    }, [isLicenseShown]);
    const onClickToggleShowInfo = useCallback(function onClickToggleShowInfo(event) {
        event.preventDefault();
        setIsInfoShown(!isInfoShown);
    }, [isInfoShown]);
    return (React.createElement("div", { className: "credit" },
        React.createElement("div", { className: "credit__header" },
            React.createElement("div", { className: "credit__head-line" },
                React.createElement("span", { className: "credit__name" }, name),
                author && (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "credit__by" },
                        " ",
                        "by",
                        " "),
                    React.createElement("span", { className: "credit__author" }, author)))),
            React.createElement("div", { className: "credit__links" },
                React.createElement("a", { className: "credit__toggle-show-license", href: licenseUrl || "#", target: licenseUrl && "_blank", onClick: !licenseUrl ? onClickShowLicense : null }, isLicenseShown
                    ? "Hide license"
                    : licenseUrl
                        ? "Open license"
                        : "Show license"),
                info && (React.createElement("a", { className: "credit__toggle-show-info", href: "#", onClick: onClickToggleShowInfo }, isInfoShown ? "Hide info" : "Show info")),
                React.createElement("a", { className: "credit__url", href: url, target: "_blank" }, "Website"))),
        license && (React.createElement("div", { className: "credit__license", style: { display: isLicenseShown ? "block" : "none" } }, license)),
        info && (React.createElement("div", { className: "credit__info", style: { display: isInfoShown ? "block" : "none" } }, info))));
}
