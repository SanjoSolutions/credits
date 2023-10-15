"use client"

import React, { type ReactElement, useCallback, useState } from "react"

export interface CreditProps {
  name: string
  author?: string
  url: string
  license?: any
  licenseUrl?: string
  info?: any
}

export function Credit({
  name,
  author,
  url,
  license,
  info,
  licenseUrl,
}: CreditProps): ReactElement {
  const [isLicenseShown, setIsLicenseShown] = useState(false)
  const [isInfoShown, setIsInfoShown] = useState(false)

  const onClickShowLicense = useCallback(
    function onClickShowLicense(event) {
      event.preventDefault()
      setIsLicenseShown(!isLicenseShown)
    },
    [isLicenseShown],
  )

  const onClickToggleShowInfo = useCallback(
    function onClickToggleShowInfo(event) {
      event.preventDefault()
      setIsInfoShown(!isInfoShown)
    },
    [isInfoShown],
  )

  return (
    <div className="credit">
      <div className="credit__header">
        <div className="credit__head-line">
          <span className="credit__name">{name}</span>
          {author && (
            <>
              <span className="credit__by"> {"by"} </span>
              <span className="credit__author">{author}</span>
            </>
          )}
        </div>
        <div className="credit__links">
          <a
            className="credit__toggle-show-license"
            href={licenseUrl || "#"}
            target={licenseUrl && "_blank"}
            onClick={!licenseUrl ? onClickShowLicense : null}
          >
            {isLicenseShown
              ? "Hide license"
              : licenseUrl
              ? "Open license"
              : "Show license"}
          </a>
          {info && (
            <a
              className="credit__toggle-show-info"
              href="#"
              onClick={onClickToggleShowInfo}
            >
              {isInfoShown ? "Hide info" : "Show info"}
            </a>
          )}
          <a className="credit__url" href={url} target="_blank">
            {"Website"}
          </a>
        </div>
      </div>
      {license && (
        <div
          className="credit__license"
          style={{ display: isLicenseShown ? "block" : "none" }}
        >
          {license}
        </div>
      )}
      {info && (
        <div
          className="credit__info"
          style={{ display: isInfoShown ? "block" : "none" }}
        >
          {info}
        </div>
      )}
    </div>
  )
}
