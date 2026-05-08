---
title: Image output
description: Example artifact flow for generated images.
---

# Image Output

An image generation task creates an `image_output` artifact with a PNG byte ref, thumbnail ref, prompt/source links, model refs, policy refs, and export metadata.

The artifact envelope remains stable even if the PNG moves from local storage to object storage. UI renders through the render manifest. Evidence and policy refer to the same artifact id.
