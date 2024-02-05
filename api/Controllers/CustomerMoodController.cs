using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;

namespace api.Controllers
{
    public class CustomerMoodController : Controller
    {
        // GET: CustomerMood
        public ActionResult Index()
        {
            return View();
        }

        // GET: CustomerMood/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: CustomerMood/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: CustomerMood/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: CustomerMood/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: CustomerMood/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: CustomerMood/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: CustomerMood/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}