import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fontSize } from "../../../themes/theme";

const Wrapper = styled.span`
  font-size: ${(props) => props.size || fontSize(props)};
  margin-right: ${(props) => (props.left ? "0.6em" : "0px")};
  margin-left: ${(props) => (props.right ? "0.6em" : "0px")};
  color: ${(props) => {
    if (props.primary) {
      return props.theme.colors.primary;
    } else {
      return "inherit";
    }
  }};
  display: inline-flex;
  vertical-align: -0.125em;
  svg {
    display: inline-block;
    font-size: inherit;
    width: 1em;
    height: 1em;
    overflow: visible;
    position: relative;
  }
`;

function Icon({ name, size, ...props }, ref) {
  const [iconModule, setIconModule] = useState(null);
  useEffect(() => {
    import(`!!@svgr/webpack?-svgo,+ref!./icons/${name}.svg`)
      .then((m) => {
        setIconModule(m);
      })
      .catch((err) => {
        console.warn("icon not found", name);
      });
  }, [name]);

  const renderIcon = () => {
    if (!iconModule) return null;

    return iconModule.default.render();
  };

  return (
    <Wrapper ref={ref} size={size} {...props}>
      {renderIcon()}
    </Wrapper>
  );
}

export default React.forwardRef(Icon);
