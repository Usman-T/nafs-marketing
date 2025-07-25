"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { PiXCircleDuotone } from "react-icons/pi";
import { cn } from "@/utils";

export function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

export function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />;
}

export function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal {...props} />;
}

export function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-40 bg-[#1d2021]/80 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
        className
      )}
      {...props}
    />
  );
}

export function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed top-[50%] left-[50%] z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#3c3836] bg-[#1d2021] text-[#ebdbb2] shadow-xl transition-all duration-200",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close className="absolute top-4 right-4 text-[#a89984] hover:text-[#fe8019] transition-colors">
            <PiXCircleDuotone size={24} />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

export function DialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("text-left space-y-1", className)} {...props} />;
}

export function DialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("mt-6 flex justify-end", className)} {...props} />;
}

export function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn("text-2xl font-bold text-[#fe8019]", className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm text-[#a89984] mt-1", className)}
      {...props}
    />
  );
}
