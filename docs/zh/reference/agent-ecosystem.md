---
title: Agent 标准生态
description: Agent Knowledge、Agent UI、Agent Runtime、Agent Evidence、Agent Policy、Agent Artifact 与 Agent Tool 的相互链接。
---

# Agent 标准生态

Agent 标准生态把 Agent 产品拆成可移植契约。每个标准只拥有一层语义，并通过稳定 refs 连接其他标准，避免吞掉整个 stack。

## Agent Artifact 的位置

Agent Artifact 拥有 durable deliverable facts：artifact identity、kinds、parts、byte refs、versions、operations、diffs、render manifests、export manifests、source links 与 handoff packages。

Artifact 说明 Agent 产出了什么、当前版本是什么、结构如何、bytes 在哪里，以及如何渲染、导出、评审或交接。

## 当前标准

| Standard | Role | Site | LLM context | Repository |
| --- | --- | --- | --- | --- |
| Agent Knowledge | 面向 Agent 的 source-grounded knowledge packs。 | [site](https://limecloud.github.io/agentknowledge/) | [llms-full](https://limecloud.github.io/agentknowledge/llms-full.txt) | [repo](https://github.com/limecloud/agentknowledge) |
| Agent UI | 面向 Agent 产品的 interaction surfaces。 | [site](https://limecloud.github.io/agentui/) | [llms-full](https://limecloud.github.io/agentui/llms-full.txt) | [repo](https://github.com/limecloud/agentui) |
| Agent Runtime | Execution facts、controls、tasks、tools 与 recovery。 | [site](https://limecloud.github.io/agentruntime/) | [llms-full](https://limecloud.github.io/agentruntime/llms-full.txt) | [repo](https://github.com/limecloud/agentruntime) |
| Agent Evidence | Evidence、provenance、verification、review、replay 与 export。 | [site](https://limecloud.github.io/agentevidence/) | [llms-full](https://limecloud.github.io/agentevidence/llms-full.txt) | [repo](https://github.com/limecloud/agentevidence) |
| Agent Policy | risk、permission、approval、retention、waiver、access 与 policy decision facts。 | [site](https://limecloud.github.io/agentpolicy/) | [llms-full](https://limecloud.github.io/agentpolicy/llms-full.txt) | [repo](https://github.com/limecloud/agentpolicy) |
| Agent Artifact | durable deliverables、versions、parts、previews、exports、source links 与 handoff packages。 | [site](https://limecloud.github.io/agentartifact/) | [llms-full](https://limecloud.github.io/agentartifact/llms-full.txt) | [repo](https://github.com/limecloud/agentartifact) |
| Agent Tool | tool declarations、surfaces、invocations、progress、results、permissions 与 audit refs。 | [site](https://limecloud.github.io/agenttool/) | [llms-full](https://limecloud.github.io/agenttool/llms-full.txt) | [repo](https://github.com/limecloud/agenttool) |
| Agent Context | Agent 当前可用、选择、预算、组装、注入、压缩、缺失与脱敏的上下文事实。 | [site](https://limecloud.github.io/agentcontext/) | [llms-full](https://limecloud.github.io/agentcontext/llms-full.txt) | [repo](https://github.com/limecloud/agentcontext) |

## 边界规则

```text
Agent Knowledge -> Agent 可以使用什么长期、可溯源上下文
Agent Runtime   -> Agent 工作如何被接受、执行、控制和恢复
Agent UI        -> Agent 工作如何投影到用户可见表面
Agent Evidence  -> Agent 结果为什么可信、如何评审、回放和导出
Agent Policy    -> Agent 动作是否可以继续以及需要哪些约束
Agent Artifact  -> Agent 产出了什么 durable deliverable 以及它如何变化
Agent Tool      -> Agent 暴露、调用、推进并返回了什么能力
Agent Context   -> Agent 当前可用、选择、组装、压缩、缺失并注入了什么上下文
```

## 未来标准候选

| Candidate | 为什么可能成为标准 |
| --- | --- |
| Agent Evaluation | acceptance scenarios、rubrics、eval runs、quality gates 与 evidence-backed benchmark records。 |
| Agent Workflow | portable multi-step plans、scene launches、background jobs 与 handoff states。 |
| Agent Model Routing | task profiles、model candidates、routing decisions、fallback、quota 与 cost records。 |
