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
      collapsible: true,
      collapsed: false,
      items: [
        "setup/install",
        {
          type: "category",
          label: "How to guide",
          link: { type: "generated-index" },
          collapsible: true,
          collapsed: false,
          items: [
            "how-to/create-workspace",
            "how-to/create-project",
            "how-to/roles",
            "how-to/access-control",
            "how-to/create-table",
            "how-to/create-column",
            "how-to/add-row",
            "how-to/custom-views",
            "how-to/default-values",
            "how-to/multiple-tables",
            "how-to/add-secrets",
            "how-to/app-check",
          ],
        },

        {
          type: "category",
          label: "FAQs",
          // link: { type: "generated-index" },
          collapsed: true,
          items: [
            "faqs/overview",
            "faqs/database",
            "faqs/access",
            "faqs/cost",
          ],
        },
        {
          type: "category",
          label: "Troubleshooting",
          // link: { type: "generated-index" },
          collapsed: true,
          items: [
            "troubleshooting/overview",
            "troubleshooting/deleted-project-issue",
            "troubleshooting/sign-in-issue",
            "troubleshooting/project-creation-issue",
          ],
        }
      ],
    },
    // {
    //   type: "category",
    //   label: "Templates",
    //   collapsible: false,
    //   items: [
    //     "templates/roadmap"
    //   ]

    // },
    {
      type: "category",
      label: "Learning and Resources",
      collapsible: true,
      collapsed: true,
      items: [
        "cloud-functions/code-snippets",
        {
          type: "category",
          label: "Tutorials",
          collapsible: true,
          items: [
            "tutorials/webflow-form",
            "tutorials/spotify-wrapped",
            "tutorials/pdf-generator",
            "tutorials/sendgrid-emails",
            {
              type: "category",
              label: "Bots",
              // link: { type: "generated-index" },
              collapsible: true,
              items: ["bots/slack-bot", "bots/twitter-bot"],
            },
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
      label: "Database",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Field Types",
          collapsed: true,
          items: [
            "field-types/supported-fields",
            "field-types/audit-fields",
            "field-types/derivative",
            "field-types/connector",
            // "field-types/connect-table",
            "field-types/connect-service",
            "field-types/action",
            {
              type: "category",
              label: "Array Fields",
              // link: {
              //   type: "doc",
              //   id: "field-types/array-overview",
              // },
              collapsed: true,
              items: ["field-types/array-overview", "field-types/array"],
            },
            // "field-types/array",
            "field-types/single-select",
            "field-types/multi-select",
            "field-types/image-file",
            "field-types/status",
            "field-types/sub-table",
            "field-types/array-subtable",
            "field-types/formula",
          ],
        },
        "database/field-names",
        {
          type: "category",
          label: "Import / Export Data",
          // link: { type: "generated-index" },
          collapsed: false,
          items: [
            "import-export-data/import-csv",
            "import-export-data/import-airtable",
            "import-export-data/import-postgresql-sql",
          ],
        },
        "cloud-functions/full-text-search",
        {
          type: "category",
          label: "API Reference",
          // link: { type: "generated-index" },
          items: [
            "reference/rowy-user",
            "reference/action-status",
            "reference/rowy",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Workflows",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Extensions",
          // link: {
          //   type: "doc",
          //   id: "extensions/overview",
          // },
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
          // link: {
          //   type: "doc",
          //   id: "webhooks/overview",
          // },
          collapsed: true,
          items: [
            "webhooks/overview",
            "webhooks/basic",
            "webhooks/typeform",
            "webhooks/stripe",
          ],
        },
        "field-types/derivative",
        "field-types/action",
        "cloud-functions/cloud-logs",

        // {
        //   type: "category",
        //   label: "Rowy Run",
        //   collapsed: true,
        //   items: ["rowy-run/overview"],
        // },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "FlutterFlow",
          // link: { type: "generated-index" },
          collapsible: true,
          items: [
            "flutterflow/overview",
            "flutterflow/setup",
            "flutterflow/mapping-datatypes",
            "flutterflow/displaying-images",
            "flutterflow/displaying-timestamps",
            "flutterflow/map-array",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Community",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Changelog",
          href: "https://www.rowy.io/changelog",
        },
        {
          type: "category",
          label: "Contributing",
          items: [
            "contributing/contributing",
            "contributing/frontend-architecture",
            "contributing/add-a-field-type",
          ],
        },
        "help-and-support",
        {
          type: "link",
          label: "Events",
          href: "https://www.rowy.io/events",
        },
      ],
    },
  ],
};
