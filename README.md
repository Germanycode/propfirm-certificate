# Prop Firm Certificate Registry (PoC)

## Mục tiêu
Lưu trữ bằng chứng chứng chỉ trader (Funded Trader Certificate) theo mô hình:
- File certificate lưu off-chain (IPFS)
- Hash + metadata tối thiểu lưu on-chain

Giải pháp giúp:
- Chống chỉnh sửa
- Dễ verify độc lập
- Tăng độ uy tín cho quỹ prop firm

---

## Kiến trúc
- Blockchain: EVM (Ethereum / Polygon / Arbitrum)
- Smart Contract: CertificateRegistry
- Off-chain storage: IPFS
- Verification: Blockchain Explorer

---

## Dữ liệu on-chain
| Trường | Mô tả |
|------|------|
| subjectId | ID định danh trader/certificate |
| propFirmId | Tên quỹ (The5%ers, FTMO, …) |
| certHash | Hash hoặc IPFS CID của certificate |
| timestamp | Thời điểm ghi nhận |
| issuer | Ví deploy / ghi dữ liệu |

---

## Cách chạy
```bash
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network localhost

