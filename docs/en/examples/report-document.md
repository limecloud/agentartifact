---
title: Report document
description: Example artifact flow for a structured report.
---

# Report Document

A research agent creates a durable report.

```json
{
  "schema_version": "0.1.0",
  "artifact_id": "art_report_001",
  "artifact_kind": "report_document",
  "title": "Market analysis report",
  "status": "ready",
  "current_version_id": "artver_report_001",
  "parts": [
    { "part_id": "p_summary", "part_type": "document_block", "role": "summary", "order": 1 },
    { "part_id": "p_table", "part_type": "table", "role": "comparison", "order": 2 }
  ]
}
```

The report links each section to sources, creates a render manifest for preview, exports Markdown and PDF, and lets evidence cite `artifact_id`, `version_id`, and `part_id`.
