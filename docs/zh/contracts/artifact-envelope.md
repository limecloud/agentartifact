---
title: Artifact envelope
description: 一个交付物的稳定身份与生命周期。
---

# Artifact envelope

记录 artifact_id、artifact_kind、title、status、created_at、updated_at、created_by、current_version_id、parts、byte_refs、versions、source_links、render/export/policy/evidence/runtime refs。保持 artifact_id 跨版本与导出稳定，payload 过期或脱敏时也保留 envelope。
