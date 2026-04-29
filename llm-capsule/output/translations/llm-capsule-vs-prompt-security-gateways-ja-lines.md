# LLM Capsule vs Prompt Security Gateways — 日本語翻訳

## Section 01: Hero

LLM Capsule vs Prompt Security Gateways
LLM Capsule vs プロンプトセキュリティゲートウェイ

Compare LLM Capsule with prompt security gateways. Gateways filter at the API layer; LLM Capsule enables AI adoption at the data layer with structure-preserving encapsulation.
LLM Capsuleとプロンプトセキュリティゲートウェイを比較します。ゲートウェイはAPIレイヤーでフィルタリングし、LLM Capsuleは構造保存カプセル化によりデータレイヤーでAI導入を可能にします。

## Section 02: Overview

Prompt security gateways sit between the user and the AI model, scanning prompts for sensitive content and filtering or blocking requests that contain flagged patterns. They operate at the API interaction layer. LLM Capsule operates as an AI enablement data layer — transforming the data itself before it enters any AI workflow, enabling AI adoption rather than blocking it.
プロンプトセキュリティゲートウェイは、ユーザーとAIモデルの間に位置し、プロンプト内の機密コンテンツをスキャンし、フラグ付きパターンを含むリクエストをフィルタリングまたはブロックします。APIインタラクションレイヤーで動作します。LLM CapsuleはAI活用データレイヤーとして機能し、データがAIワークフローに入る前にデータ自体を変換し、ブロックではなくAI導入を可能にします。

## Section 03: How Gateways Work

How Prompt Security Gateways Work
プロンプトセキュリティゲートウェイの仕組み

Prompt gateways intercept API calls to LLM providers. They scan the prompt text for PII patterns, blocked topics, or compliance violations. If sensitive content is detected, the gateway either blocks the request, strips the flagged content, or alerts an administrator. Some gateways also scan AI responses for data leakage.
プロンプトゲートウェイは、LLMプロバイダーへのAPI呼び出しをインターセプトします。プロンプトテキスト内のPIIパターン、ブロック対象トピック、コンプライアンス違反をスキャンします。機密コンテンツが検出された場合、ゲートウェイはリクエストをブロックするか、フラグ付きコンテンツを除去するか、管理者に通知します。一部のゲートウェイは、データ漏洩についてAIレスポンスもスキャンします。

## Section 04: Limitations

Limitations
制限事項

Prompt-only scope. Gateways only see the final prompt, not the underlying data pipeline. Documents processed through RAG systems or batch pipelines may bypass the gateway entirely.
プロンプト限定の範囲。ゲートウェイは最終プロンプトのみを確認し、基盤となるデータパイプラインは把握できません。RAGシステムやバッチパイプラインで処理されたドキュメントは、ゲートウェイを完全にバイパスする可能性があります。

Block or pass binary. Most gateways make a binary decision — block the request or pass it through. There is no mechanism to transform data while preserving usability.
ブロックか通過の二者択一。ほとんどのゲートウェイは二者択一の判断を行います — リクエストをブロックするか通過させるかです。使用性を維持しながらデータを変換するメカニズムはありません。

No output restoration. If a gateway strips sensitive content from a prompt, the AI output will lack that context. There is no restoration mechanism.
出力の復元なし。ゲートウェイがプロンプトから機密コンテンツを除去した場合、AI出力はそのコンテキストを欠きます。復元メカニズムはありません。

Pattern-based detection. Gateways rely on pattern matching which misses context-dependent sensitivity and generates false positives on non-sensitive content that matches PII patterns.
パターンベースの検出。ゲートウェイはパターンマッチングに依存しており、コンテキスト依存の機密性を見逃し、PIIパターンに一致する非機密コンテンツに対して誤検知を発生させます。

## Section 05: How LLM Capsule Differs

How LLM Capsule Differs
LLM Capsuleの違い

LLM Capsule operates upstream of the prompt. It encapsulates sensitive data at the document level before any AI processing occurs. The encapsulation is structure-preserving — AI receives complete, processable documents. After AI generates outputs, local restoration (restoration) restores enterprise context automatically.
LLM Capsuleはプロンプトの上流で動作します。AI処理が行われる前に、ドキュメントレベルで機密データをカプセル化します。カプセル化は構造保存型であり、AIは完全で処理可能なドキュメントを受け取ります。AIが出力を生成した後、ローカル復元（復元）がエンタープライズコンテキストを自動的に復元します。

AI results are restored locally. LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.
AI結果はローカルで復元されます。LLM Capsuleは機密データを保護し、使用可能な出力を維持しながら、エンタープライズAI導入を可能にします。

## Section 06: Comparison

Comparison
比較

Capability
機能

Prompt Security Gateways
プロンプトセキュリティゲートウェイ

LLM Capsule
LLM Capsule

Operating layer
動作レイヤー

API / prompt level
API / プロンプトレベル

AI enablement data layer
AI活用データレイヤー

Scope
範囲

Prompt text only
プロンプトテキストのみ

Full data pipeline
完全なデータパイプライン

Protection method
保護方法

Block or strip
ブロックまたは除去

Structure-preserving encapsulation
構造保存カプセル化

Output restoration
出力の復元

✗
✗

✓ Local restoration
✓ ローカル復元

Context-aware data control
コンテキスト対応のデータ制御

Limited pattern matching
限定的なパターンマッチング

Policy-based classification
ポリシーベースの分類

RAG pipeline support
RAGパイプラインサポート

Partial
部分的

Full integration
完全統合

Model independence
モデル非依存性

Provider-specific
プロバイダー固有

Works with any LLM
あらゆるLLMで動作

## Section 07: Enterprise Workflow Example

Enterprise Workflow Example
エンタープライズワークフロー例

RAG-Based Knowledge System
RAGベースのナレッジシステム

An enterprise deploys a RAG system that retrieves internal documents to augment AI responses. A prompt gateway can only scan the final composed prompt — it cannot protect the 50 retrieved document chunks that feed into it.
エンタープライズがAIレスポンスを拡張するために内部ドキュメントを取得するRAGシステムを導入しています。プロンプトゲートウェイは最終的に構成されたプロンプトのみをスキャンでき、それに入力される50の取得ドキュメントチャンクを保護することはできません。

LLM Capsule encapsulates all documents at the data layer before they enter the RAG index. Every retrieval, every prompt composition, and every AI output operates on protected data. Restoration restores enterprise context in the final response.
LLM Capsuleは、ドキュメントがRAGインデックスに入る前に、データレイヤーですべてのドキュメントをカプセル化します。すべての取得、すべてのプロンプト構成、すべてのAI出力が保護されたデータ上で動作します。復元により、最終レスポンスでエンタープライズコンテキストが復元されます。

## Section 08: FAQ

FAQ
FAQ

How does LLM Capsule differ from prompt gateways?
LLM Capsuleはプロンプトゲートウェイとどう異なりますか？

Prompt gateways filter at the API level and can only block or pass requests. LLM Capsule transforms data at the source, preserving structure for AI processing and enabling output restoration.
プロンプトゲートウェイはAPIレベルでフィルタリングし、リクエストのブロックまたは通過のみ可能です。LLM Capsuleはソースでデータを変換し、AI処理のための構造を保存し、出力の復元を可能にします。

Can I use both a gateway and LLM Capsule?
ゲートウェイとLLM Capsuleの両方を使用できますか？

Yes. LLM Capsule provides data-layer protection while gateways provide an additional API-level monitoring layer. The two approaches are complementary.
はい。LLM Capsuleはデータレイヤーの保護を提供し、ゲートウェイは追加のAPIレベル監視レイヤーを提供します。2つのアプローチは相互補完的です。

## Section 09: Related Pages

Product Overview
製品概要

Architecture
アーキテクチャ

Trust & Compliance
トラスト＆コンプライアンス

Request a Demo
デモをリクエスト

Learn Hub
ラーンハブ

## Section 10: CTA Band

See how LLM Capsule works with your data
LLM Capsuleがお客様のデータでどのように機能するかをご覧ください

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
お客様のドキュメント、デプロイ要件、評価基準をお持ちください。実際のワークフローでデモンストレーションいたします。

Request a Demo
デモをリクエスト

AWS Marketplace
AWS Marketplace
