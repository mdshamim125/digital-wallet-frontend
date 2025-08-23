import { TransactionForm } from "@/components/modules/user/TransactionForm";
import { useWithdrawMoneyByUserMutation } from "@/redux/features/transaction/transaction.api";

export default function WithdrawMoney() {
  const [trigger, result] = useWithdrawMoneyByUserMutation();

  return (
    <TransactionForm
      title="Withdraw Money"
      description="Enter the amount and select an account to withdraw"
      actionLabel="Withdraw"
      useMutationHook={() => [trigger, result]}
    />
  );
}
