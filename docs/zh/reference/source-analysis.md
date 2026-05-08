---
title: 实现分析摘要
description: 从 artifact systems、resource protocols 与 agent product patterns 蒸馏出的分析。
---

# 实现分析摘要

Agent Artifact 出现的原因，是 Agent 系统产出的不只是消息，而是需要 identity、versioning、preview、provenance、export 与 handoff semantics 的交付物。

## 既有标准已经解决的部分

Resource protocol 说明客户端可以通过 URI 与 media type 引用外部内容。Container/package 标准说明 descriptor 需要 digest、size、media type、annotations 与 manifests。Provenance 标准说明 artifact 是由 activities 和 agents 创建的 entities。Annotation 标准说明评论和 source links 需要 selectors，而不是复制整份文档。Attestation 标准说明 generation/build facts 可以签名或验证。Event 与 telemetry 标准说明 artifact lifecycle events 应关联 traces，但不应变成 trace backend。

## Agent 系统新增的压力

Agent 输出可能 streaming、repair、model rewrite、user edit、evidence verify、policy block、support bundle export 或 peer-agent handoff。一个回答可以变成 report、table、image、transcript 与 browser replay。它们需要稳定 artifact ids 与 part ids，让 UI、Runtime、Evidence、Policy、Storage 指向同一个对象。

## 设计结论

1. Artifact identity 独立于 chat messages、files 与 UI cards。
2. 区分 artifact kind、media type 与 file extension。
3. 分离 parts、byte refs、versions、operations、diffs、renders、exports 与 handoff packages。
4. 私密 payload 优先 refs/hashes，不直接内嵌。
5. Source links 应能定位到 part。
6. Export 是 snapshot，不是 source of truth。
7. Bytes 过期或脱敏时仍保留 artifact envelope 与 audit shape。
