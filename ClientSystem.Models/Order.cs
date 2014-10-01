namespace ClientSystem.Models
{
    using ClientSystem.Models.Enumerations;
    using ClientSystem.Models.Interfaces;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Order
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string DiscName { get; set; }

        public string CompanyName { get; set; }

        public string ContactName { get; set; }

        public int StationaryPhone { get; set; }

        public int MobilePhone { get; set; }

        public int NumberOfCopies { get; set; }

        public ICarrier Carrier { get; set; }

        public ICarrierBrand CarrierBrand { get; set; }

        public ICarrierRecord CarrierRecord { get; set; }

        public ICarrierPrint CarrierPrint { get; set; }

        public bool Varnishing { get; set; }

        public ICarrierBox CarrierBox { get; set; }

        public ICarrierCover CarrierCover { get; set; }

        public ICarrierAccessory CarrierAccessory { get; set; }

        public string AdditionalInformation { get; set; }

        public string Delivery { get; set; }

        public string DeliveryAddress { get; set; }

        public string InvoiceName { get; set; }

        public PaymentType PaymentType { get; set; }

        public bool Proforma { get; set; }

        public int Advance { get; set; }

        public int Surcharge { get; set; }

    }
}
