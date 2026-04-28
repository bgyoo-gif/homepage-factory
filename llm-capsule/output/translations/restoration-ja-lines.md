# Restoration — 日本語翻訳

## Section 01: Hero

Restoration
復元

Restoring AI outputs to original enterprise context using locally stored mappings after AI processing. A core capability of LLM Capsule.
AI処理後にローカルに保存されたマッピングを使用して、AI出力を原本のエンタープライズコンテキストに復元します。LLM Capsuleの基本機能です。

## Section 02: Definition

Restoration (also known as local restoration) is the process of restoring AI-generated outputs to their original enterprise context. After AI processes encapsulated data, the locally stored mapping between original and protected values is applied to the AI output, replacing encapsulated representations with real enterprise data. AI results are restored locally through this automated process.
復元（ローカル復元とも呼ばれます）は、AIが生成した出力を原本のエンタープライズコンテキストに復元するプロセスです。AIがカプセル化されたデータを処理した後、原本と保護された値の間のローカル保存マッピングがAI出力に適用され、カプセル化された表現が実際のエンタープライズデータに置換されます。AI結果はこの自動化プロセスを通じてローカルで復元されます。

## Section 03: Explanation

When LLM Capsule encapsulates a document, it creates a local mapping table. The table records the relationship between each original sensitive value and its replacement. This mapping never leaves the enterprise environment.
LLM Capsuleが文書をカプセル化する際、ローカルマッピングテーブルを作成します。テーブルは各原本の機密値とその置換値の関係を記録します。このマッピングはエンタープライズ環境から一切外部に出ません。

After AI processing completes, the restoration engine applies this mapping in reverse. Encapsulated tokens are replaced with original values. The result is an AI output that contains real names, real figures, and real references, ready for enterprise use.
AI処理が完了した後、復元エンジンがこのマッピングを逆方向に適用します。カプセル化されたトークンが原本の値に置換されます。結果として、実名、実数値、実参照を含む、エンタープライズで即座に利用可能なAI出力が生成されます。

Restoration is deterministic. Every encapsulated value maps to exactly one original value. There is no ambiguity, no approximation, and no manual intervention required.
復元は決定論的です。すべてのカプセル化された値は正確に1つの原本の値にマッピングされます。曖昧さ、近似値、手動介入は一切不要です。

## Section 04: Example

The agreement between ENTITY_A and ENTITY_B provides for a payment of AMOUNT_1 due on DATE_1.
ENTITY_AとENTITY_B間の契約は、DATE_1を期日とするAMOUNT_1の支払いを規定しています。

The agreement between Acme Corp and GlobalTech provides for a payment of $2.4M due on March 15, 2026.
Acme CorpとGlobalTech間の契約は、2026年3月15日を期日とする240万ドルの支払いを規定しています。

## Section 05: CTA

See LLM Capsule Restoration in Action
LLM Capsule復元の実践をご確認ください

Experience how enterprise AI outputs are restored to their original context with real data.
エンタープライズAI出力が実際のデータで原本コンテキストに復元される過程を直接ご体験ください。

Request a Demo
デモリクエスト

View Product
製品を見る

Enterprise AI Enablement by CUBIG
Enterprise AI Enablement by CUBIG
