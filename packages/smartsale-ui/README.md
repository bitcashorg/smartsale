# Smartsale UI Design System Documentation

This directory serves as the **documentation repository** for the Smartsale Markets Design System. It aims to provide clear and actionable guidelines for the team, ensuring a unified and efficient approach to building user interfaces.
Contains all styled shadcn/ui components and custom Smartsale components


## Goals of the Design System

1. **Consistent CSS and Tailwind Variable Names**  
   Establish a cohesive system for CSS and Tailwind variables, ensuring clarity and alignment with our brand.

2. **Branded shadcn/ui Component System**  
   Build and maintain a reusable, branded component library based on shadcn/ui principles.

3. **Comprehensive Component Variants**  
   Provide all necessary component variants within the design system to:
   - Avoid duplication
   - Reduce maintenance costs
   - Minimize friction and unnecessary overrides
   - Simplify complexity when building UI views/pages


## General Guidelines for Working on the App 

### 1. **Color Palette**
   - Always use colors from our **defined palette**.
   - Avoid default Tailwind colors to maintain brand consistency.

### 2. **Component Variants (CVA)**
   - Create **CVA (Class Variance Authority)** variants in the design system.
   - Avoid writing overrides directly in the application codebase.

### 3. **AI-Assisted Markup**
   - Leverage AI tools to generate UI markup.
   - Ensure generated code aligns with the **defined system, constraints, and rules**.



## Design System Specification

### Typography
The design system includes robust typography settings for titles, headings, and body text. Each type has predefined sizes, spacing, and styles to ensure readability and brand consistency.

Refer to [`typography.json`](./path-to-typography.json) for the complete specification and details.


### Colors
The color palette defines consistent color usage across the application. It includes categories such as **Primary**, **Error**, **Warning**, **Success**, **Neutral**, **Accent**, **Background**, and **Text**. Each category is carefully tailored to meet specific design requirements.

Refer to [`colors.json`](./path-to-colors.json) for the complete specification and details.

### Shadows
Shadows are categorized into styles for **Normal**, **Hover**, and **Focused** use cases. These are designed to add depth and clarity to UI components.

Refer to [`shadows.json`](./path-to-shadows.json) for the complete specification and details.

### Icons
We use **Heroicons** as our icon library for the design system.  
- **Icon Types**: Outline and Solid.  
- **Integration**: The icons are lightweight and SVG-based, making them ideal for modern web applications.  

Refer to the [Heroicons documentation](https://heroicons.com/) for a complete list of available icons and usage examples.


These specifications are also provided as JSON files (`colors.json`, `shadows.json`, `typography.json`) in the package for reference, ensuring easy access and integration into the design and development workflow. Dont import these files into the app, they are only for reference.




## shadcn/ui: Layout and Styling Best Practices

1. **Use the `cn` Utility Function**  
   Simplify conditional class names by using the `cn` utility function.

2. **Add `className` to Props**  
   Always include the `className` prop in your components to allow for external styling and overrides.

3. **Use `cva` for Variants**  
   Define component variants with the `cva` function to centralize styling logic and maintain consistency.

4. **Modern CSS Patterns**  
   Utilize CSS Flexbox and Grid for modern, efficient layout patterns.

5. **Responsive Design**  
   Build fluid and responsive components that adapt to varying container sizes.

6. **Radix UI Integration**  
   - Use built-in Radix functions and props like `onOpenChange` instead of custom React logic such as `useState`.
   - Leverage Radix UI data attributes for styling interactive components, ensuring accessibility and predictability.

7. **Styling Priority**  
   - **Favor Radix UI data attributes** for accessibility and semantic clarity.
   - Use **Tailwind CSS classes** for styling simplicity and consistency.
   - Resort to JavaScript styling only as a last option.

8. **Form Components**
   - Use `<Form>` component instead of native `<form>` for enhanced functionality.

9. **Navigation Components**
   - Use shadcn/ui Sidebar component for menu navigation.
   - Use shadcn/ui Sheet component for contextual dialogs and panels.

10. **Loading States**
    - Use shadcn/ui Skeleton components in Suspense fallbacks.

11. **Notifications**
    - Use Sonner for toast notifications instead of shadcn/ui Toast for improved animations.

### Examples

#### Example 1: Styling a Tab Component
```tsx
<Tab
  data-state="active"
  className={cn(
    "text-sm font-medium",
    "data-[state=active]:text-brand-500",
    "data-[state=inactive]:text-brand-400"
  )}
>
  Tab 1
</Tab>
```

#### Example 2: Responsive Grid Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card />
  <Card />
  <Card />
</div>
```

#### Example 3: Using Radix's `onOpenChange`
```tsx
<Dialog onOpenChange={(isOpen) => console.log(isOpen)}>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>Content goes here</DialogContent>
</Dialog>
```


By following these best practices, your shadcn/ui components will be consistent, accessible, and maintainable.


## Resources

1. **[shadcn-ui/ui Source](https://github.com/shadcn-ui/ui)**  
   The source code for shadcn/ui components.
   
2. **[shadcn/ui Twitter](https://x.com/shadcn)**  
   The official Twitter account for shadcn/ui, providing updates, announcements, and community engagement.

3. **[Radix UI](https://www.radix-ui.com/)**  
   A library of unstyled, accessible primitives for building component systems. Radix UI is highly modular and integrates well with Tailwind CSS for customization.

4. **[Lucide Icons](https://lucide.dev/)**  
   A fork of Feather Icons offering a customizable set of icons for modern web projects. Works seamlessly with ShadCN-style systems.

5. **[shadcn/ui Kit](https://kit.shadcnui.com/)**  
   The definitive starter kit for building modern, accessible, and customizable UI components with Tailwind CSS. This kit embodies the ShadCN philosophy, offering a practical and minimalistic approach to component design.

6. **[Animations.dev](https://animations.dev/)**  
   A collection of CSS animations for modern web projects.

7. **[Dev Resources](https://github.com/blockmatic/dev-resources)**  
   A curated collection of tutorials, talks and tools for building performant applications.
