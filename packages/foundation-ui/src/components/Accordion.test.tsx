import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "./Accordion";

function BasicAccordion(
  props: Omit<React.ComponentProps<typeof AccordionItem>, "children"> = {},
) {
  return (
    <Accordion>
      <AccordionItem {...props}>
        <AccordionItemTrigger>Summary text</AccordionItemTrigger>
        <AccordionItemContent>Details content</AccordionItemContent>
      </AccordionItem>
    </Accordion>
  );
}

describe("Accordion", () => {
  it("renders summary and collapsed content by default", () => {
    render(<BasicAccordion />);

    expect(
      screen.getByRole("button", { name: "Summary text" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("region", { hidden: true })).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(screen.getByRole("region", { hidden: true })).toHaveAttribute(
      "inert",
    );
  });

  it("shows content when defaultOpen", () => {
    render(<BasicAccordion defaultOpen />);

    expect(screen.getByRole("region")).toHaveAttribute("aria-hidden", "false");
    expect(screen.getByText("Details content")).toBeInTheDocument();
  });

  it("opens and closes when the trigger is clicked", async () => {
    const user = userEvent.setup();
    render(<BasicAccordion />);
    const trigger = screen.getByRole("button", { name: "Summary text" });
    const content = screen.getByRole("region", { hidden: true });

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(content).toHaveAttribute("aria-hidden", "false");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(content).toHaveAttribute("aria-hidden", "true");
  });

  it("calls onOpenChange when the open state changes", async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    render(<BasicAccordion onOpenChange={onOpenChange} />);

    await user.click(screen.getByRole("button", { name: "Summary text" }));

    expect(onOpenChange).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("does not change state when disabled", async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    render(<BasicAccordion isDisabled onOpenChange={onOpenChange} />);
    const trigger = screen.getByRole("button", { name: "Summary text" });

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("supports controlled open state", async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    const { rerender } = render(
      <Accordion>
        <AccordionItem isOpen onOpenChange={onOpenChange}>
          <AccordionItemTrigger>Summary text</AccordionItemTrigger>
          <AccordionItemContent>Details content</AccordionItemContent>
        </AccordionItem>
      </Accordion>,
    );
    const trigger = screen.getByRole("button", { name: "Summary text" });

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    await user.click(trigger);
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    rerender(
      <Accordion>
        <AccordionItem isOpen={false} onOpenChange={onOpenChange}>
          <AccordionItemTrigger>Summary text</AccordionItemTrigger>
          <AccordionItemContent>Details content</AccordionItemContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("connects trigger and content with accessible ids", () => {
    render(<BasicAccordion />);
    const trigger = screen.getByRole("button", { name: "Summary text" });
    const content = screen.getByRole("region", { hidden: true });

    expect(trigger).toHaveAttribute("aria-controls", content.id);
    expect(content).toHaveAttribute("aria-labelledby", trigger.id);
  });

  it("forwards refs and class names", () => {
    const accordionRef = React.createRef<HTMLDivElement>();
    const itemRef = React.createRef<HTMLDivElement>();
    const { container } = render(
      <Accordion ref={accordionRef} className="my-accordion">
        <AccordionItem ref={itemRef} className="my-item">
          <AccordionItemTrigger className="my-trigger">
            Summary
          </AccordionItemTrigger>
          <AccordionItemContent className="my-content">
            Details
          </AccordionItemContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(accordionRef.current).toBeInstanceOf(HTMLDivElement);
    expect(itemRef.current).toBeInstanceOf(HTMLDivElement);
    expect(container.querySelector(".my-accordion")).toBeInTheDocument();
    expect(container.querySelector(".my-item")).toBeInTheDocument();
    expect(container.querySelector(".my-trigger")).toBeInTheDocument();
    expect(container.querySelector(".my-content")).toBeInTheDocument();
  });

  it("renders multiple items independently", async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem>
          <AccordionItemTrigger>First</AccordionItemTrigger>
          <AccordionItemContent>First details</AccordionItemContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTrigger>Second</AccordionItemTrigger>
          <AccordionItemContent>Second details</AccordionItemContent>
        </AccordionItem>
      </Accordion>,
    );

    const firstTrigger = screen.getByRole("button", { name: "First" });
    const secondTrigger = screen.getByRole("button", { name: "Second" });
    const firstContent = document.getElementById(
      firstTrigger.getAttribute("aria-controls")!,
    );
    const secondContent = document.getElementById(
      secondTrigger.getAttribute("aria-controls")!,
    );

    await user.click(firstTrigger);

    expect(firstContent).toHaveAttribute("aria-hidden", "false");
    expect(secondContent).toHaveAttribute("aria-hidden", "true");
  });
});
