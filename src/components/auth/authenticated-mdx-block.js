import React from "react";
import { AuthenticatedTemplate } from "@azure/msal-react";

import NestedMdxBlock from "../mdx/nested-mdx-block";

const AuthenticatedMdxBlock = ({ children }) => {
  if (!children) return null;

  return (
    <AuthenticatedTemplate>
      <NestedMdxBlock children={children} />
    </AuthenticatedTemplate>
  );
};

export default AuthenticatedMdxBlock;
