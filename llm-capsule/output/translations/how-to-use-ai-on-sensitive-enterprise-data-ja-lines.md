# How to Use AI on Sensitive Enterprise Data — 日本語翻訳

## Section 01: Hero

How to Use AI on Sensitive Enterprise Data
機密性の高いエンタープライズデータでAIを活用する方法

Learn how to use large language models on sensitive enterprise data without exposing original documents. Encapsulate locally, process safely, restore usable outputs.
原本文書を公開せずに、機密性の高いエンタープライズデータで大規模言語モデルを活用する方法をご紹介します。ローカルでカプセル化し、安全に処理し、利用可能な出力を復元します。

## Section 02: Screenshot Frame

Secure Enterprise AI — Sensitive documents encapsulated locally, processed by AI, outputs restored with original data
セキュアエンタープライズAI — 機密文書をローカルでカプセル化し、AIで処理し、元のデータで出力を復元します

## Section 03: The Challenge

Enterprises generate massive volumes of sensitive documents — contracts, financial reports, medical records, legal filings, HR communications, and internal strategy memos. These documents contain exactly the information that AI could transform: extracting key clauses, summarizing quarterly results, classifying patient records, or translating technical specifications.
企業は契約書、財務報告書、医療記録、法的書類、HR文書、社内戦略メモなど、膨大な量の機密文書を生成しています。これらの文書には、AIが変革できる情報がまさに含まれています — 重要条項の抽出、四半期業績の要約、患者記録の分類、技術仕様の翻訳。

But sending this data to external AI services means exposing it. Every prompt, every document, every query transmitted to an LLM API becomes visible to the AI provider's infrastructure. For regulated industries and security-conscious organizations, this creates a fundamental conflict: the data that benefits most from AI is the data that cannot be exposed.
しかし、このデータを外部AIサービスに送信することは、データの公開を意味します。LLM APIに送信されるすべてのプロンプト、すべての文書、すべてのクエリがAIプロバイダーのインフラストラクチャに公開されます。規制対象の業界やセキュリティを重視する組織にとって、これは根本的な矛盾を生み出します — AIから最も恩恵を受けるデータが、まさに公開できないデータなのです。

## Section 04: Requirements

The Requirements for Secure Enterprise AI
セキュアエンタープライズAIの要件

Secure LLM usage on sensitive enterprise data requires three capabilities working together:
機密性の高いエンタープライズデータでの安全なLLM利用には、3つの機能が連携して動作する必要があります。

1. Pre-processing protection.
1. 前処理保護。

Sensitive data must be identified and replaced before it leaves the enterprise. This is not simple keyword matching — enterprise documents contain context-dependent sensitivity. A name in a contract carries different risk than the same name in a public directory. Structure-preserving processing ensures the document's semantic relationships remain intact for AI comprehension.
機密データは、企業を離れる前に特定され、置換される必要があります。これは単純なキーワードマッチングではありません — エンタープライズ文書にはコンテキストに依存する機密性があります。契約書内の名前は、公開ディレクトリ内の同じ名前とは異なるリスクを持ちます。構造保存処理により、AIの理解に必要な文書の意味的関係が完全に維持されます。

2. Model-agnostic processing.
2. モデル非依存処理。

The AI enablement layer must work with any LLM — not just one provider's API. Enterprises use multiple AI models for different tasks. The AI enablement data layer must operate independently of the model layer.
AI活用レイヤーは、特定のプロバイダーのAPIだけでなく、あらゆるLLMで動作する必要があります。企業はさまざまなタスクに複数のAIモデルを使用しています。AI活用データレイヤーは、モデルレイヤーから独立して動作する必要があります。

3. Output Restoration (Restoration).
3. 出力復元。

AI results are restored locally. Without this, AI outputs are abstracted and unusable. Enterprise AI enablement requires that outputs contain real names, real account numbers, and real references — restored locally after AI processing completes.
AI結果はローカルで復元されます。これがなければ、AI出力は抽象的で使用不可能です。エンタープライズAI活用には、出力に実際の名前、実際の口座番号、実際の参照が含まれている必要があります — AI処理完了後にローカルで復元されます。

## Section 05: How It Works

LLM Capsule Enables This
LLM Capsuleがこれを実現します

LLM Capsule operates as an AI enablement data layer between enterprise data systems and external AI services. The process follows four steps:
LLM Capsuleは、エンタープライズデータシステムと外部AIサービスの間でAI活用データレイヤーとして機能します。プロセスは4つのステップに従います。

Step 1: Sensitive Detection. LLM Capsule automatically identifies sensitive elements within enterprise documents — names, account numbers, dates, financial figures, project codes, and organization-defined entities beyond standard PII.
ステップ1：機密検出。LLM Capsuleは、エンタープライズ文書内の機密要素を自動的に特定します — 名前、口座番号、日付、財務数値、プロジェクトコード、標準的なPIIを超えた組織定義エンティティ。

Step 2: Local Encapsulation. Detected sensitive elements are replaced with structure-preserving tokens locally. The document retains its full semantic structure — tables, references, hierarchies — so AI models can process it accurately. The mapping between original values and tokens is stored locally and never transmitted.
ステップ2：ローカルカプセル化。検出された機密要素は、ローカルで構造保存トークンに置換されます。文書はテーブル、参照、階層などの完全な意味構造を保持するため、AIモデルが正確に処理できます。元の値とトークン間のマッピングはローカルに保存され、送信されることはありません。

Step 3: AI Processing. Only the encapsulated document crosses the trust boundary. The AI provider receives a structurally complete document with protected values. It can summarize, extract, classify, and analyze — but never sees the original sensitive data.
ステップ3：AI処理。カプセル化された文書のみが信頼境界を越えます。AIプロバイダーは、保護された値を含む構造的に完全な文書を受け取ります。要約、抽出、分類、分析が可能ですが、元の機密データを見ることはありません。

Step 4: Local Restoration. AI outputs are restored locally using the stored mapping. Real names, figures, dates, and references return automatically. The result is a business-ready document that can be used directly in enterprise workflows without manual post-processing.
ステップ4：ローカル復元。AI出力は、保存されたマッピングを使用してローカルで復元されます。実際の名前、数値、日付、参照が自動的に復元されます。結果は、手動の後処理なしでエンタープライズワークフローで直接使用できるビジネス対応文書です。

Key principle: Your data stays on-premise. Only capsules travel. Outputs come back complete.
基本原則：データはオンプレミスに留まります。カプセルだけが移動します。出力は完全な形で戻ります。

## Section 06: Use Cases

Enterprise Use Cases
エンタープライズ活用事例

Financial Services
金融サービス

Banks and insurance companies process loan applications, claims documents, and regulatory filings through AI — with all customer PII, account numbers, and financial figures encapsulated before transmission.
銀行や保険会社は、ローン申請書、請求書類、規制書類をAIで処理します — すべての顧客PII、口座番号、財務数値を送信前にカプセル化します。

Healthcare & Legal
医療・法務

Hospitals and law firms use AI for medical record summarization, contract analysis, and case research — with patient identifiers, client names, and privileged information protected throughout.
病院や法律事務所は、医療記録の要約、契約書分析、判例調査にAIを使用します — 患者識別情報、顧客名、機密情報をプロセス全体で保護します。

Defense & Public Sector
防衛・公共部門

Government agencies and defense organizations draft confidential documents using AI — with classified terms, operation names, and tactical data encapsulated in air-gapped environments.
政府機関や防衛組織は、AIを使用して機密文書を作成します — 機密用語、作戦名、戦術データをエアギャップ環境でカプセル化します。

Telecom & Security
通信・セキュリティ

Infrastructure companies analyze vulnerability logs and network data with AI — with sensitive IP addresses, topology details, and security findings protected from external exposure.
インフラ企業は、AIで脆弱性ログやネットワークデータを分析します — 機密IPアドレス、トポロジーの詳細、セキュリティ調査結果を外部公開から保護します。

## Section 07: FAQ

Can enterprises use AI on sensitive data safely?
企業は機密データでAIを安全に使用できますか？

Yes. By encapsulating sensitive data locally before AI processing and restoring outputs afterward, enterprises can use LLMs on real documents without exposing the original data.
はい。AI処理前に機密データをローカルでカプセル化し、処理後に出力を復元することで、企業は元のデータを公開せずに実際の文書でLLMを使用できます。

What types of enterprise data can LLM Capsule handle?
LLM Capsuleはどのような種類のエンタープライズデータを処理できますか？

LLM Capsule handles structured and unstructured enterprise data including contracts, financial documents, medical records, legal filings, HR files, and customer communications.
LLM Capsuleは、契約書、財務文書、医療記録、法的書類、HRファイル、顧客コミュニケーションを含む、構造化および非構造化エンタープライズデータを処理します。

Does LLM Capsule work with any AI model?
LLM CapsuleはすべてのAIモデルで動作しますか？

Yes. LLM Capsule is model-agnostic. It works with ChatGPT, Claude, Gemini, Perplexity, or any LLM API because it operates at the data layer before transmission.
はい。LLM Capsuleはモデル非依存です。送信前のデータレイヤーで動作するため、ChatGPT、Claude、Gemini、Perplexity、またはあらゆるLLM APIで動作します。

What happens to AI outputs after processing?
処理後のAI出力はどうなりますか？

AI outputs are automatically restored locally. Original names, figures, dates, and references are mapped back into the AI results, producing business-ready documents without manual post-processing.
AI出力はローカルで自動的に復元されます。元の名前、数値、日付、参照がAI結果に再マッピングされ、手動の後処理なしでビジネス対応文書が生成されます。

## Section 08: Related Pages

Product Overview
製品概要

Architecture
アーキテクチャ

Trust & Compliance
信頼性とコンプライアンス

Request a Demo
デモのご依頼

## Section 09: CTA Band

Use AI on Your Sensitive Data with LLM Capsule
LLM Capsuleで機密データにAIを活用

Enable enterprise AI on real documents without exposing sensitive data. Encapsulate locally, process safely, restore completely.
機密データを公開せずに実際の文書でエンタープライズAIを実現します。ローカルでカプセル化し、安全に処理し、完全に復元します。

Request a Demo
デモのご依頼

View Product
製品を見る

Enterprise AI Enablement by CUBIG
CUBIGによるエンタープライズAI活用支援
