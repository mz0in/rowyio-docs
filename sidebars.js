/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // Collapsed Version
  // someSidebar: {
  //   "Getting Started": ["home", "install", "faq"],
  //   "How To": ["how-to/create-table"],
  // },

  someSidebar: [
    "introduction",
    {
      type: "category",
      label: "Getting started",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Setup",
          link: { type: "doc", id: "setup/install" },
          collapsed: true,
          items: [
            "setup/install",
            "setup/update"
          ],
        },
        {
          type: "category",
          label: "How to guide",
          link: { type: "generated-index" },
          collapsed: true,
          items: [
            "how-to/create-workspace",
            "how-to/create-project",
            "how-to/roles",
            "how-to/create-table",
            "how-to/create-column",
            "how-to/add-row",
            "how-to/custom-views",
            "how-to/default-values",
            "how-to/multiple-tables",
          ],
        },
        {
          type: "category",
          label: "Importing Exporting Data",
          link: { type: "generated-index" },
          collapsed: true,
          items: [
            "import-export-data/import-airtable",
          ],
        },
        
        {
          type: "category",
          label: "FAQs",
          link: { type: "generated-index" },
          collapsed: true,
          items: [
                    "faqs/overview",
                    "faqs/database",
                    "faqs/access",
                    "faqs/cost"
                  ],
        }
      ],
    },
    {
      type: "category",
      label: "Docs",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Field types",
          link: { type: "generated-index" },
          collapsed: true,
          items: [
            "field-types/supported-fields",
            "field-types/audit-fields",
            "field-types/derivative",
            "field-types/connector",
            "field-types/connect-table",
            "field-types/connect-service",
            "field-types/action",
            "field-types/image-file",
            "field-types/status",
          ],
        },
        {
          type: "category",
          label: "Tutorials",
          link: { type: "generated-index" },
          collapsed: true,
          items: [
            "tutorials/webflow-form",
            "tutorials/spotify-wrapped",
            "tutorials/pdf-generator",
            // "templates/typeform-webhook",
            // "templates/bannerbear",
            // "templates/magic-link",
            // "templates/translate-api",
            // "templates/github-webhook",
            // "templates/cal-scheduling",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Cloud functions",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Extensions",
          link: { type: "generated-index" },
          collapsed: true,
          items: [
            "extensions/overview",
            "extensions/algolia-index",
            "extensions/sendgrid-email",
            "extensions/twilio-message",
            "extensions/slack-message",
            "extensions/doc-sync",
            "extensions/discord-message",
          ],
        },
        {
          type: "category",
          label: "Webhooks",
          link: { type: "generated-index" },
          collapsed: true,
          items: ["webhooks/overview", "webhooks/basic", "webhooks/typeform"],
        },
        "field-types/derivative",
        "field-types/action",
        "cloud-logs/cloud-logs",
        "cloud-functions/code-snippets",
        // {
        //   type: "category",
        //   label: "Rowy Run",
        //   collapsed: true,
        //   items: ["rowy-run/overview"],
        // },
        {
          type: "category",
          label: "API Reference",
          link: { type: "generated-index" },
          items: ["reference/rowy-user", "reference/action-status","reference/rowy"],
        },
      ],
    },

    {
      type: "category",
      label: "Community",
      collapsible: false,
      items: [
        "changelog/changelog",
        {
          type: "category",
          label: "Contributing",
          link: { type: "doc", id: "community/contributing" },
          items: ["community/contributing", "community/add-a-field-type"],
        }
      ],
    },
  ],
};
