/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

module.exports = [
  // Display
  {
    "order": "flexible",
    "properties": [
      "display",
      "visibility",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "clip",
      "zoom",
      "flex-direction",
      "flex-order",
      "flex-pack",
      "flex-align"
    ]
  },

  // Positioning
  {
    "order": "flexible",
    "properties": [
      "position",
      "z-index",
      "top",
      "right",
      "bottom",
      "left"
    ]
  },

  // Box model
  {
    "order": "flexible",
    "properties": [
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-right",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "table-layout",
      "empty-cells",
      "caption-side",
      "border-spacing",
      "border-collapse"
    ]
  },

  // Colors and Typography
  {
    "order": "flexible",
    "properties": [
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "opacity",
      "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
      "color",
      "background",
      "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
      "background-color",
      "background-image",
      "background-repeat",
      "background-attachment",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-clip",
      "background-origin",
      "background-size",
      "box-decoration-break",
      "box-shadow",
      "filter:progid:DXImageTransform.Microsoft.gradient",
      "text-shadow",
      "font",
      "font-family",
      "src",
      "font-size",
      "font-weight",
      "font-style",
      "font-variant",
      "font-size-adjust",
      "font-stretch",
      "font-effect",
      "font-emphasize",
      "font-emphasize-position",
      "font-emphasize-style",
      "font-smooth",
      "line-height",
      "text-align",
      "text-align-last",
      "vertical-align",
      "white-space",
      "text-decoration",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-style",
      "text-emphasis-position",
      "text-indent",
      "text-justify",
      "letter-spacing",
      "word-spacing",
      "text-outline",
      "text-transform",
      "text-wrap",
      "text-overflow",
      "text-overflow-ellipsis",
      "text-overflow-mode",
      "word-wrap",
      "word-break",
      "tab-size",
      "hyphens"
    ]
  },

  // Other
  {
    "order": "flexible",
    "properties": [
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",
      "content",
      "quotes",
      "counter-reset",
      "counter-increment",
      "resize",
      "cursor",
      "user-select",
      "nav-index",
      "nav-up",
      "nav-right",
      "nav-down",
      "nav-left",
      "transition",
      "transition-delay",
      "transition-timing-function",
      "transition-duration",
      "transition-property",
      "transform",
      "transform-origin",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-play-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "backface-visibility",
      "text-rendering",
      "pointer-events"
    ]
  }
];
