import { TitleProps, useRouterContext } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { logo , TunMedCare} from "assets/assets";
import React from "react";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="TunMedCare" width="50px" />
        ) : (
          <img src={TunMedCare} alt="TunMedCare" width="180px" />
        )}
      </Link>
    </Button>
  );
};
