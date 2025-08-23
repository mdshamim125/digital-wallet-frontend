import { TransactionForm } from "@/components/modules/dashboard/TransactionForm";
import { useSendMoneyByUserMutation } from "@/redux/features/transaction/transaction.api";

export default function WithdrawMoney() {
  const [trigger, result] = useSendMoneyByUserMutation();

  return (
    <TransactionForm
      title="Send Money to another user"
      description="Enter the amount and select an account to send money"
      actionLabel="Send money"
      useMutationHook={() => [trigger, result]}
    />
  );
}
