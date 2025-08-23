import { TransactionForm } from "@/components/modules/dashboard/TransactionForm";
import { useCashOutMutation } from "@/redux/features/transaction/transaction.api";

export default function WithdrawMoney() {
  const [trigger, result] = useCashOutMutation();

  return (
    <TransactionForm
      title="Withdraw money from a user’s wallet"
      description="Enter the amount and select an user account"
      actionLabel="Withdraw"
      useMutationHook={() => [trigger, result]}
    />
  );
}
