# What Is an AI Data Capsule — 日本語翻訳

## Section 01: Hero

What Is an AI Data Capsule?
AIデータカプセルとは？

Enterprise data encapsulation for secure LLM usage — how to protect sensitive data before AI processing and restore usable outputs after.
安全なLLM利用のためのエンタープライズデータカプセル化 — AI処理前に機密データを保護し、処理後に利用可能な出力を復元する方法。

## Section 02: Screenshot

Data Capsule Concept — Original document vs. encapsulated version with structure preserved
データカプセルのコンセプト — 原本文書 vs. 構造が保存されたカプセル化バージョン

## Section 03: Problem

Enterprises need to process sensitive documents through large language models for summarization, extraction, translation, and analysis. Sending raw data to external AI services creates unacceptable exposure. Existing approaches — masking, redaction, tokenization — destroy the context AI models need to produce useful outputs.
企業は、要約、抽出、翻訳、分析のために機密文書を大規模言語モデルで処理する必要があります。生データを外部AIサービスに送信すると、許容できない公開リスクが生じます。既存のアプローチ — マスキング、墨消し、トークン化 — はAIモデルが有用な出力を生成するために必要なコンテキストを破壊します。

The result is a binary choice: expose data to use AI, or protect data and get unusable results.
結果は二者択一です。AIを使用するためにデータを公開するか、データを保護して使用不可能な結果を得るか。

## Section 04: Definition

AI Data Capsule
AIデータカプセル

An AI data capsule is a locally generated AI enablement layer that wraps sensitive enterprise data before it is sent to an external AI service. The capsule preserves document structure and context while replacing sensitive elements with reversible representations. After AI processing, the capsule enables local restoration — restoring AI outputs to their full enterprise context without exposing the original data externally.
AIデータカプセルは、外部AIサービスに送信される前に機密エンタープライズデータを包むローカル生成のAI活用レイヤーです。カプセルは機密要素を可逆的な表現に置換しながら、文書の構造とコンテキストを保存します。AI処理後、カプセルはローカル復元を可能にします — 元のデータを外部に公開することなく、AI出力を完全なエンタープライズコンテキストに復元します。

## Section 05: Explanation

An AI data capsule operates as an AI enablement data layer through three stages within a restorable workflow:
AIデータカプセルは、復元可能なワークフロー内の3つのステージを通じてAI活用データレイヤーとして機能します。

Local Encapsulation.
ローカルカプセル化。

Sensitive elements in enterprise documents — names, account numbers, dates, medical codes, contract terms — are detected and replaced with structure-preserving representations. The mapping between original and replaced values is stored locally, never transmitted.
エンタープライズ文書内の機密要素 — 名前、口座番号、日付、医療コード、契約条件 — が検出され、構造保存表現に置換されます。元の値と置換された値のマッピングはローカルに保存され、送信されることはありません。

Protected AI Processing.
保護されたAI処理。

The encapsulated document is sent to any external LLM. Because document structure is preserved, the AI model can perform summarization, extraction, classification, and translation effectively. No original sensitive data leaves the enterprise environment.
カプセル化された文書はあらゆる外部LLMに送信されます。文書構造が保存されているため、AIモデルは要約、抽出、分類、翻訳を効果的に実行できます。元の機密データがエンタープライズ環境を離れることはありません。

Local Restoration.
ローカル復元。

AI results are automatically restored locally with original enterprise data. The locally stored mapping is applied to reconstruct outputs with real names, amounts, and references, producing results that are directly usable in business workflows.
AI結果は元のエンタープライズデータでローカルに自動復元されます。ローカルに保存されたマッピングが適用され、実際の名前、金額、参照で出力が再構築され、ビジネスワークフローで直接使用可能な結果が生成されます。

Key concept: AI results are automatically restored locally with original enterprise data. The AI data capsule enables AI adoption by ensuring original data never leaves the enterprise environment.
重要なコンセプト：AI結果は元のエンタープライズデータでローカルに自動復元されます。AIデータカプセルは、元のデータがエンタープライズ環境を決して離れないことを保証することで、AI導入を可能にします。

## Section 06: Enterprise Example

Financial Compliance Review
金融コンプライアンスレビュー

A bank needs AI to summarize 500 loan applications for compliance review. Each document contains customer names, social security numbers, account balances, and income data.
銀行がコンプライアンスレビューのために500件のローン申請書をAIで要約する必要があります。各文書には顧客名、社会保障番号、口座残高、収入データが含まれています。

With LLM Capsule, the bank encapsulates all documents locally. AI processes the protected versions and generates structured summaries. Local restoration restores the real customer names and account details into the summaries, producing compliance-ready outputs without ever exposing raw customer data to the AI provider.
LLM Capsuleを使用することで、銀行はすべての文書をローカルでカプセル化します。AIが保護されたバージョンを処理し、構造化されたサマリーを生成します。ローカル復元が実際の顧客名と口座詳細をサマリーに復元し、生の顧客データをAIプロバイダーに公開することなくコンプライアンス対応の出力を生成します。

## Section 07: FAQ

What is an AI data capsule?
AIデータカプセルとは何ですか？

An AI data capsule is a locally generated AI enablement layer that encapsulates sensitive enterprise data before it is sent to external AI services. After AI processing, the capsule enables local restoration so outputs remain usable in real enterprise workflows.
AIデータカプセルは、機密エンタープライズデータが外部AIサービスに送信される前にカプセル化するローカル生成のAI活用レイヤーです。AI処理後、カプセルはローカル復元を可能にし、出力が実際のエンタープライズワークフローで使用可能な状態を維持します。

How does an AI data capsule differ from data masking?
AIデータカプセルはデータマスキングとどのように異なりますか？

Data masking permanently removes sensitive information, making AI outputs unusable for enterprise workflows. An AI data capsule preserves data structure and enables restoration, so AI results can be restored to their full enterprise context locally.
データマスキングは機密情報を永久的に除去し、AI出力をエンタープライズワークフローで使用不可能にします。AIデータカプセルはデータ構造を保存し復元を可能にするため、AI結果をローカルで完全なエンタープライズコンテキストに復元できます。

Does the AI data capsule work with any LLM?
AIデータカプセルはすべてのLLMで動作しますか？

Yes. Because the capsule operates at the data layer before transmission, it works with any external AI service — ChatGPT, Claude, Gemini, or any LLM API.
はい。カプセルは送信前のデータレイヤーで動作するため、あらゆる外部AIサービス — ChatGPT、Claude、Gemini、またはあらゆるLLM API — で動作します。

Where is the mapping data stored?
マッピングデータはどこに保存されますか？

The mapping between original and encapsulated values is stored entirely within the enterprise environment. It is never transmitted to external services.
元の値とカプセル化された値のマッピングは、エンタープライズ環境内に完全に保存されます。外部サービスに送信されることはありません。

## Section 08: Related

Product Overview
製品概要

Architecture
アーキテクチャ

Trust & Compliance
信頼性とコンプライアンス

Request a Demo
デモのご依頼

Why Redaction Breaks AI
墨消しがAIを破壊する理由

## Section 09: CTA Band

See how LLM Capsule works with your data
LLM Capsuleがお客様のデータとどのように連携するかをご確認ください

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
文書、デプロイ要件、評価基準をお持ちください。お客様の実際のワークフローでデモンストレーションいたします。

Request a Demo
デモのご依頼

AWS Marketplace
AWS Marketplace
