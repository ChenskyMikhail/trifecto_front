import * as React from 'react';

import './billing.scss';
import billing from './assets/billing.png';

const DEFAULT_CLASSNAME = 'billing';

export const Billing = () => {
    return (
        <div className={`${DEFAULT_CLASSNAME}_wrapper`}>
            <div className={DEFAULT_CLASSNAME}>
                <div className={`${DEFAULT_CLASSNAME}_title`}>{"Оплата"}</div>
                <div className={`${DEFAULT_CLASSNAME}_text`}>{"К оплате принимаются карты международных платежных систем VISA, MasterCard, платежной системы БЕЛКАРТ, платежной системы МИР. Оплату также можно совершить посредством сервисов Apple Pay, Samsung Pay.\n" +
                "Безопасность совершения платежа обеспечивается современными методами проверки, шифрования и передачи данных по закрытым каналам связи.\n" +
                "Ввод данных карточки осуществляется на защищенной авторизационной странице банка. Для оплаты необходимо ввести реквизиты карточки: номер, имя держателя, срок действия и трехзначный код безопасности. Трёхзначный код безопасности (CVV2 для VISA, CVC2 для MasterCard) — это три цифры, находящиеся на обратной стороне карточки. Если карточка поддерживает технологию 3DSecure или Интернет-пароль для держателей карточек БЕЛКАРТ, или Mir Accept для держателей карточек МИР Вы будете перенаправлены на страницу банка, выпустившего карточку, для ввода кода безопасности. При оплате с помощью Apple Pay выберете карту из приложения Wallet, воспользуйтесь кодпаролем или иным способом аутентификации, в зависимости от того, какой способ выбран в приложении. При оформлении заказа с помощью Samsung Pay нажмите «Оплатить Samsung Pay», введите ваш Samsung Account и подтвердите покупку на вашем смартфоне (по отпечатку пальца, радужке или PIN-коду Samsung Pay).\n" +
                "Предоставляемая Вами персональная информация (например: имя, адрес, телефон, e-mail, номер банковской карты и прочее) является конфиденциальной и не подлежит разглашению. Данные карточки передаются только в зашифрованном виде и не сохраняются на данном интернет-ресурсе."}</div>
                <img src={billing} alt={'billing'} />
                <div className={`${DEFAULT_CLASSNAME}_text`}>{"При оплате банковской платежной карточкой возврат наличными денежными средствами не допускается. Расчеты с потребителем при возврате уплаченной за товар денежной суммы, при расторжении договора о выполнении работы (оказании услуги) осуществляются в той же форме, в которой производилась оплата товара, работы (услуги), если иное не предусмотрено соглашением сторон."}</div>
                <div className={`${DEFAULT_CLASSNAME}_text`}>{"Порядок возврата регулируется правилами платежных систем. Для возврата денежных средств на банковскую платежную карточку необходимо заполнить «Заявление о возврате денежных средств» и отправить его по электронному адресу info@trifecta.by."}</div>
                <div className={`${DEFAULT_CLASSNAME}_text`}>{"Возврат денежных средств будет осуществлен на банковскую платежную карточку в течение 7 (семи) календарных дней со дня получения «Заявление о возврате денежных средств» Компанией. Сумма возврата будет равняться сумме покупки."}</div>
                <div className={`${DEFAULT_CLASSNAME}_text`}>{"Для возврата денежных средств по операциям проведенными с ошибками необходимо обратиться с письменным заявлением и приложением чеков/квитанций, подтверждающих ошибочное списание. Данное заявление необходимо направить по электронному адресу info@trifecta.by."}</div>
            </div>
        </div>
    )
}