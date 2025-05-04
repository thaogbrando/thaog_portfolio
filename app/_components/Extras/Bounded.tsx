import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("mx-4 xl:mx-0 py-10 md:py-14 lg:py-16", className)}
        {...restProps}
      >
        <div className="mx-auto w-full">{children}</div>
      </Comp>
    );
  },
);

// Set a display name for the component
Bounded.displayName = "Bounded";

export default Bounded;